"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabase/client";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data: supabaseData, error: supabaseError } = await supabase
        .from("subscribers")
        .insert([{ name, email }]);

      if (supabaseError) {
        // Check if it's a duplicate email error
        if (
          supabaseError.code === "23505" &&
          supabaseError.details.includes("subscribers_email_key")
        ) {
          setIsError(true);
          setMessage("This email is already subscribed to our waitlist.");
          return;
        }
        throw new Error(`Supabase error: ${supabaseError.message}`);
      }

      //   Send mail via Sendgrid API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API error: ${errorData.message || response.statusText}`
        );
      }

      const apiData = await response.json();

      //   Success case > set message and reset state variables
      setMessage("Thank you for joining the waitlist! <3");
      setName("");
      setEmail("");

      //   Log success message if possible
      if (apiData.message) {
        console.log("API response:", apiData.message);
      }
    } catch (error) {
      console.error("Error: ", error);
      setIsError(true);
      setMessage("An error occurred. Please try again! :)");
    }
  };

  return (
    <div className="flex flex-col space-y-8 text-center justify-center items-center max-w-3xl p-12 animate-slide-in-bottom border rounded-sm shadow-md">
      <h1 className="text-xl font-medium">
        We just need a few <span className="text-blue-500">details</span> 👀👉🏼👈🏼
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={name}
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full max-w-sm"
            required
          />
          <p className="text-gray-500 text-xs text-left">
            How your mom calls you to help with the groceries. 🏃🏻‍♀️
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <input
            type="email"
            value={email}
            placeholder="Your email"
            className="border p-2 rounded w-full max-w-sm"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-gray-500 text-xs text-left">
            This dotcom bubble communication thingy. 💌
          </p>
        </div>
        <Button variant="outline" type="submit">
          Sign up for the Waitlist
        </Button>
        {message && (
          <p
            className={`text-sm mt-4 ${
              isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

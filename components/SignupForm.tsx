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
    setMessage("");
    setIsError(false);

    try {
      const { data: supabaseData, error: supabaseError } = await supabase
        .from("subscribers")
        .upsert([{ name, email }, { onConflict: "email" }])
        .select();

      if (supabaseError) {
        throw new Error(`Supabase error: ${supabaseError.message}`);
      }

      //   check if user was inserted or updated
      const isNewSignup =
        supabaseData && supabaseData.length > 0 && !supabaseData[0].confirmed;

      if (isNewSignup) {
        //   Send confirmation mail via Sendgrid API
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
        setMessage(
          "Thank you for joining our waitlist! Please check your email for confirmation."
        );
      } else {
        setMessage("You're already on our waitlist. We'll keep you updated!");
      }
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error: ", error);
      setIsError(true);
      setMessage("An error occurred. Please try again.");
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

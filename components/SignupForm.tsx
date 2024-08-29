"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Here you can add your logic to handle the form submission
    // For example, sending the data to an API endpoint

    setMessage(
      "Thank you for signing up! Check your mails and close this page :*"
    );
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
        {message && <p className="text-green-500 mt-4">{message}</p>}
      </form>
    </div>
  );
}

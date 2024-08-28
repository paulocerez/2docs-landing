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

    setMessage("Thank you for signing up!");
  };

  return (
    <div className="bg-blue-500">
      <h1>Hungry for your data 🤤</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 items-center text-center bg-red-500"
      >
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full max-w-md"
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Your email"
          className="border p-2 rounded w-full max-w-md"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button variant="outline" type="submit">
          Sign up for the Waitlist
        </Button>
        {message && <p className="text-green-500 mt-4">{message}</p>}
      </form>
    </div>
  );
}

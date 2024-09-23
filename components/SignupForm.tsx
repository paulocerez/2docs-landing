"use client";
import { FormEvent, useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An error occurred during signup");
      }

      setMessage(data.message);
      setIsError(false);
      if (data.isNewSignup) {
        setName("");
        setEmail("");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setIsError(true);
      setMessage(
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center sm:p-4 space-y-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-10 px-4 w-full sm:max-w-lg items-center"
      >
        <div className="space-y-2 w-full">
          <input
            type="text"
            value={name}
            placeholder="Your full name"
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded-lg w-full"
            required
          />
          <p className="text-gray-500 text-xs">
            For reference, look at your birth certificate. 🤓
          </p>
        </div>
        <div className="space-y-2 w-full">
          <input
            type="email"
            value={email}
            placeholder="Your email"
            className="border p-2 rounded-lg w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-gray-500 text-xs">
            This dotcom bubble communication thingy. 💌
          </p>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="signup-button text-center py-2 px-4 rounded-md font-normal w-full sm:w-fit md:w-auto md:px-6"
        >
          {isLoading ? "Signing up..." : "Sign up for the Waitlist"}
        </button>
        {message && (
          <p
            className={`text-sm mt-4 ${
              isError ? "text-red-500" : "text-blue-500"
            } break-words`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
import useUser from "../utils/useUser";

// User login page
export default function Login() {
  const [error, setError] = useState(false);
  // Check if user is already logged in and redirect to the secure page if logged in
  const { mutateUser } = useUser({
    redirectTo: "/secure",
    redirectIfFound: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      consent: "accepted",
    };

    const userData = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const user = await userData.json();

    try {
      await mutateUser(user);
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setError(true);
    }
  }

  return (
    <div className="flex flex-col bg-slate-800 p-10 text-white justify-center items-center min-h-screen text-center">
      <h1 className="text-7xl font-bold">Login Page</h1>
      <p className="mt-4 text-2xl">Please log in to see the protected page.</p>
      <p className="mt-4 text-lg">
        You can&apos;t view{" "}
        <a href="/secure">
          <code className="hover:underline">/secure</code>
        </a>{" "}
        without logging in.
      </p>
      <button
        onClick={handleSubmit}
        className="mt-8 px-10 py-4 bg-blue-800 hover:bg-blue-700 font-semibold rounded-lg ring"
      >
        Login
      </button>
      {error && (
        <h2 className="mt-4 text-xl font-semibold text-red-600">
          Error Logging In. Please Try Again Later
        </h2>
      )}
    </div>
  );
}

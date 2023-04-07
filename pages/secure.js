import Router from "next/router";
import { withSessionSsr } from "../utils/session";
import { useState } from "react";

// Users can't view this page unless they're logged in.
export default function Secure() {
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const logoutAction = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    try {
      logoutAction;
      Router.reload();
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setError(true);
    }
  }
  return (
    <div className="flex flex-col bg-slate-800 p-10 text-white justify-center items-center min-h-screen text-center">
      <h1 className="text-7xl font-bold">Protected Page</h1>
      <p className="mt-4 text-2xl">
        This is a protected page that can&apos;t be viewed unless logged in.
      </p>
      <button
        onClick={handleSubmit}
        className="mt-8 px-10 py-4 bg-blue-800 hover:bg-blue-700 font-semibold rounded-lg ring"
      >
        Logout
      </button>
      {error && (
        <h2 className="mt-4 text-xl font-semibold text-red-600">
          Error Logging Out. Please Try Again Later
        </h2>
      )}
    </div>
  );
}

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  // You can return data here from a database knowing only authenticated users (you) will see it.
  return { props: {} };
});

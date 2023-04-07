import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "consent_given",

  cookieOptions: {
    // secure: true should be used below in production (HTTPS) but can't be used in development (HTTP)
    secure: process.env.NODE_ENV === "production",
    maxAge: undefined, // expire when the user closes the browser
  },
};

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}

import { getIronSession } from "iron-session";

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
  return async function (req, res) {
    const session = await getIronSession(req, res, sessionOptions);
    req.session = session; // mimic old behavior
    return handler(req, res);
  };
}

export function withSessionSsr(handler) {
  return async function (context) {
    const { req, res } = context;
    const session = await getIronSession(req, res, sessionOptions);
    context.req.session = session; // mimic old behavior
    return handler(context);
  };
}

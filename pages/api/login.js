import { withSessionRoute } from "@/utils/session";

export default withSessionRoute(async (req, res) => {
  const { consent } = await req.body;

  try {
    if (consent === "accepted") {
      const user = { isConsentGiven: true };
      req.session.user = user;
      await req.session.save(); //
      res.json(user);
    } else {
      const user = { isConsentGiven: false };
      res.json(user);
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});

import { withSessionRoute } from "@utils/session";

export default withSessionRoute(async (req, res) => {
  const user = req.session.get("user");

  if (user) {
    res.json({
      isConsentGiven: true,
      ...user,
    });
  } else {
    res.json({
      isConsentGiven: false,
    });
  }
});

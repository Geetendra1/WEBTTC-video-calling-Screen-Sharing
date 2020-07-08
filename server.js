const express = require("express");
const twilio = require("twilio");

require("dotenv").config();

const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

const port = process.env.PORT || 5000;

const app = express();

app.listen(port);

app.get("/token", (req, res) => {
  const token = new AccessToken(
      TWILIO_ACCOUNT_SID="ACf34c01b47e554d5b9d1bb952b27a0e65",
      TWILIO_API_KEY="SKbf6c17bd3705b3c904cce1ac555a99e8",
      TWILIO_API_SECRET="MD7ZmMJH4pRwssvkEAIQqOzxuqornTWh"
  );

  token.addGrant(new VideoGrant());

  token.identity = req.query.user;

  res.send({ token: token.toJwt() });
});

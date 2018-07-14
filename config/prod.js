// prod.js - production keys here!!



module.exports = {
  googleClientID: "774299394318-2vs0bq13ntpp2t0tljf2608a8nnfpdgc.apps.googleusercontent.com",
  googleClientSecret: "bXETj6ASSTp2kkTNDuT-mhRY",
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};

// prod.js - production keys here!!

// {"web":{
//   "client_id":"774299394318-2vs0bq13ntpp2t0tljf2608a8nnfpdgc.apps.googleusercontent.com",
//   "project_id":"emaily-dev-210118",
//   "auth_uri":"https://accounts.google.com/o/oauth2/auth",
//   "token_uri":"https://accounts.google.com/o/oauth2/token",
//   "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
//   "client_secret":"bXETj6ASSTp2kkTNDuT-mhRY",
//   "redirect_uris":["http://localhost:5000/*"],
//   "javascript_origins":["http://localhost:5000"]
//   }}


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

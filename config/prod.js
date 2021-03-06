
  // "client_id":"253143829911-efj0dnjk8v8i2t4uka9lm1jkhehd9m1b.apps.googleusercontent.com",
  // "project_id":"emaily-prod-210613",
  // "auth_uri":"https://accounts.google.com/o/oauth2/auth",
  // "token_uri":"https://accounts.google.com/o/oauth2/token",
  // "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
  // "client_secret":"0d43RzQkmhwopw02eCpqeWg0"

// prod.js - production keys here!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};

const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
// const { request, response } = require('express');
const stripe = require("stripe")(
  "sk_test_51I13IjLNy5PuqvDTNaCl24BK0DR4hFsXAZdowjwcTSg7mkdxwJF5KIblL5sjfF4tDBdrXlcNZZVfO4ExcdmKARst00rJUxszV6"
);
//*app config

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("What Can I Help You...?"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved For This Amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);



// exports.api = functions.https.onRequest(app);
//*http://localhost:5001/front-end-527b7/us-central1/api
//*http://localhost:5001/front-end-527b7/us-central1/api
//*http://localhost:5001/front-end-527b7/us-central1/api
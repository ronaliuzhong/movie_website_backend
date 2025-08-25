// main server code


// did npm install express and npm install cors
import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js";

const app = express();
app.use(cors());
app.use(express.json());

// initial routes. urls that u use to send and receive information
// so for this URL, we use this route
app.use("/api/v1/reviews", reviews);
// for anything else -- 404 error
// req (request), res (response) -- express uses
app.use("*", (req, res) => res.status(404).json({error: "not found"}));

export default app;
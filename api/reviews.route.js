import express from "express";

const router = express.Router();
router.route("/").get((req, res) => {
    res.send("Reviews API router working");
})

export default router;
//configurations routes
import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
    res.json("Endpoint '/' running successfully");
})

export default router;

import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

import route from "./routes/route.routes.js";
//autres importations de routes ici

const app = express();

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(morgan("dev"));

app.get("/", (res) => {
    res.json("Server working well!!! ✅");
});

app.use("/node-api", route);
//autres routes ici

export default app;
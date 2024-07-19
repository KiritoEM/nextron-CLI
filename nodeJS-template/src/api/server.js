import dotenv from "dotenv";
import app from "./app.js";
import http from "http";
import connectDatabase from "../core/DatabaseConfig.js";

dotenv.config();

//connect to datase
connectDatabase();

const server = http.createServer(app);

export { server };
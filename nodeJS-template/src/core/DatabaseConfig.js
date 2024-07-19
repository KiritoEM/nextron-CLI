import mongoose from "mongoose";
import { databaseErrorHandler } from "./error.js";

const connectDatabase = async () => {
    try {
        await mongoose.connection.close();
        const uri = process.env.MONGO_COMPASS_URI || "";
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri);
        console.log(`Connected to the database ${mongoose.connection.db.databaseName.toUpperCase()} ✅`);
    } catch (err) {
        databaseErrorHandler(err);
    }
};

export default connectDatabase;
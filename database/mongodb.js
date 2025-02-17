import mongoose from "mongoose";

import { MONGODB_URI, NODE_ENV } from "../config/env.js";

if (!MONGODB_URI) throw new Error("Please define mongodb environment variable in .env.<development/production>.local");


const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log(`[-]INFO - Connected to DB in ${NODE_ENV} mode.`);
    } catch (error) {
        console.error("[!] ERROR: Connection to Database failed");
        process.exit(1);
    }
}

export default connectToDB;
import express from "express";
import { PORT } from "./config/env.js";

import connectToDB from "./database/mongodb.js";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/users.route.js";
import subscriptionRouter from "./routes/subscriptions.route.js"

const app = express();

app.get("/", (req, res) => res.send("welcome to sub-quack: Your subscriptions tracker companion"));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/Subscription", subscriptionRouter);
app.listen(PORT, async () => {
    console.log(`[-] INFO: Subscription Tracker API is running on: http://localhost:${PORT}`);
    await connectToDB();
});
import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => res.send({ message: "GET all Subscriptions" }));
subscriptionRouter.get("/:id", (req, res) => res.send({ title: "GET subscription details" }));
subscriptionRouter.post("/", (req, res) => res.send({ title: "CREATE subscription" }));
subscriptionRouter.put("/:id", (req, res) => res.send({ title: "UPDATE subscription" }));
subscriptionRouter.delete("/:id", (req, res) => res.send({ title: "DELETE subscriptions" }));
subscriptionRouter.get("/user/:id", (req, res) => res.send({ title: "GET all user subscriptions" }));
subscriptionRouter.put("/:id/cancel", (req, res) => res.send({ title: "CANCEL user subscriptions" }));
subscriptionRouter.get("/upcoming-renewals", (req, res) => res.send({ title: "GET incoming renewals" }))

export default subscriptionRouter;
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send("Get all users");
});

userRouter.post("/", (req, res) => {
    res.send({message: "create new user"})
});

userRouter.get("/:id", (req, res) => {
    res.send("Get specific user");
});

userRouter.put("/:id", (req, res) => {
    res.send({message: "update user"});
});

userRouter.delete("/:id", (req, res) => {
    res.send({message: "delete user"});
});

export default userRouter;
import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User Index"));
userRouter.get("/edit", (req, res) => res.send("User edit"));
userRouter.get("/password", (req, res) => res.send("User Password"));

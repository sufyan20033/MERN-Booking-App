import express from "express";
import User from "../models/User.js";
import { createUser } from "../controllers/usercontrol.js";
import { updateUser } from "../controllers/usercontrol.js";
import { deleteUser } from "../controllers/usercontrol.js";
import { GETALL } from "../controllers/usercontrol.js";
import { getone } from "../controllers/usercontrol.js";
import { verifytoken, verifyuser } from "../utils/verify.js"

const router = express.Router();

 router.get("/verify", verifytoken, (req,res,next)=>{
    res.send("hello user, you are logged in....")
 })

 router.get("/checkuser", verifyuser, (req,res,next)=>{
    res.send("hello user, you are logged in and can delete your account...")
 })

//CREATE
router.post("/", createUser);

///UPDATE

router.put("/:id", updateUser);

//DELETE

router.delete("/:id", deleteUser);

 ///GET
 router.get("/:id", getone);

 ///GET ALL

 router.get("/", GETALL);

export default router
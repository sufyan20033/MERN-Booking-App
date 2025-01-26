import express from "express";
import { register } from "../controllers/authcontrol.js";
import { login } from "../controllers/authcontrol.js";
const router = express.Router();



router.get("/",(req,res)=>{
    res.send("Hello auth endpoint...")
})

router.post("/register", register);
router.post("/login", login);

export default router
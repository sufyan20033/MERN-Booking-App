import express from "express";
import Hotel from "../models/Hotel.js";
import { cccc, createHotel } from "../controllers/hotelcontrol.js";
import { updateHotel } from "../controllers/hotelcontrol.js";
import { deletehotel } from "../controllers/hotelcontrol.js";
import { GETALL } from "../controllers/hotelcontrol.js";
import { getone,CountByCity,gethotelrooms } from "../controllers/hotelcontrol.js";
const router = express.Router();

//CREATE
router.post("/", createHotel);

///UPDATE

router.put("/:id", updateHotel);

//DELETE

router.delete("/:id", deletehotel);

 ///GET
 router.get("/:id", getone);

 ///GET ALL
 router.get("/", GETALL);
 router.get("/cccc", cccc);
router.get("/hello/CountByCity", CountByCity);
router.get("/rooms/:id" , gethotelrooms)
//router.get("/CountByType", CountBytype);

export default router
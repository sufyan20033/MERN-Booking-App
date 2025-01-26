import express from "express";
import Room from "../models/Rooms.js";
import { createRoom } from "../controllers/roomcontrol.js";
import { updateRoom } from "../controllers/roomcontrol.js";
import { deleteRoom } from "../controllers/roomcontrol.js";
import { GETALL } from "../controllers/roomcontrol.js";
import { getone } from "../controllers/roomcontrol.js";
const router = express.Router();

//CREATE
router.post("/:hotelid", createRoom);

///UPDATE

router.put("/:id", updateRoom);

//DELETE

router.delete("/:hotelid/:id", deleteRoom);

 ///GET
 router.get("/:id", getone);

 ///GET ALL

 router.get("/", GETALL);

export default router
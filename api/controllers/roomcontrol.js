import Room from "../models/Rooms.js"
import Hotel from "../models/Hotel.js"
import Rooms from "../models/Rooms.js";
////CREATE Room
export const createRoom = async (req, res) => {
    const newRoom = new Room(req.body);
    const hotelId = req.params.hotelid;
    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms: savedRoom._id}})
            res.status(200).json(savedRoom);
        }
        catch(err){
            res.status(500).json(err);

        }  
    }
    catch(err){
        res.status(500).json(err);
    }

}


///UPDATE Room
export const updateRoom= async(req,res)=>{
    // res.send("Hello Room endpoint...")
    try{
         const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
         res.status(200).json(updatedRoom);
    }
    catch(err){
      res.status(500).json(err);
    }
 }

 ///DELETE Room
export const deleteRoom = async(req,res)=>{
    // res.send("Hello Room endpoint...")
    const hotelId = req.params.hotelid;
    try{
        await Rooms.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms: req.params.id}})
            res.status(200).json("Rooms has been deleted successfully...");
        }
        catch(err){
            res.status(500).json(err);
    
        }
    }
    catch(err){
        res.status(500).json(err);

    }
     
 }
///GET

export const getone = async(req,res)=>{
    // res.send("Hello Room endpoint...")
    try{
         const hot = await Room.findbyId(req.params.id);
         res.status(200).json(hot);
    }
    catch(err){
     res.status(500).json(err);
    }
 }


 ///GET ALL

export const GETALL = async(req,res)=>{
    // res.send("Hello Room endpoint...")
    try{
         const Rooms = await Room.find();
         res.status(200).json(Rooms);
    }
    catch(err){
     res.status(500).json(err);
    }
 }
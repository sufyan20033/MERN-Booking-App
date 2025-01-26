////CREATE HOTEL
import Hotel from "../models/Hotel.js";
import Rooms from "../models/Rooms.js"
export const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch (err) {
        res.status(500).json(err);
    }

}


///UPDATE HOTEL
export const updateHotel= async(req,res)=>{
    // res.send("Hello hotel endpoint...")
    try{
         const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
         res.status(200).json(updatedHotel);
    }
    catch(err){
      res.status(500).json(err);
    }
 }

 ///DELETE HOTEL
export const deletehotel = async(req,res)=>{
    // res.send("Hello hotel endpoint...")
    try{
         await Hotel.findByIdAndDelete(req.params.id);
         res.status(200).json("Hotel has been deleted Successfully...!!!");
    }
    catch(err){
     res.status(500).json(err);
    }
 }
///GET

export const getone = async(req,res)=>{
    // res.send("Hello hotel endpoint...")
    try{
         const hell= await Hotel.findById(req.params.id);
         res.status(200).json(hell);
    }
    catch(err){
     res.status(500).json(err);
    }
 }


 ///GET ALL

export const GETALL = async(req,res)=>{
    // res.send("Hello hotel endpoint...")
    const {min,max, ...others} = req.query;
    try{
         const hotels = await Hotel.find({
            ...others, cheapestPrice:{$gt: min | 1, $lt: max || 1000},
         })
         res.status(200).json(hotels);
    }
    catch(err){
     res.status(500).json(err);
    }
 }
export const CountByCity = async(req,res)=>{
    const cities = req.query.cities.split(",")
    try{
         const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city: city})
         }))
         res.status(200).json(list);
    }
    catch(err){
     res.status(500).json(err);
    }
 }
export const cccc = async(req,res)=>{
    
        const chotel = await Hotel.countDocuments({type: "Hotel"});
        const capartment = await Hotel.countDocuments({type: "Apartment"});
        const cresort = await Hotel.countDocuments({type: "Resort"});
        const cvilla = await Hotel.countDocuments({type: "Villa"});
        const ccabin = await Hotel.countDocuments({type: "Cabin"});
         
        res.status(200).json([
            {type: "Hotel",count: chotel },
            {type: "Apartment",count: capartment },
            {type: "Resort",count: cresort },
            {type: "Villa",count: chotel },
            {type: "Cabin",count: ccabin },
         ]);
         res.json("Hello");
 }
 export const gethotelrooms = async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Rooms.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
        res.status(500).json(err)
    }
  };
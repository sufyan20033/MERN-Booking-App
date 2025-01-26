////CREATE User
import User from "../models/User.js";
export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }

}


///UPDATE User
export const updateUser= async(req,res)=>{
    // res.send("Hello User endpoint...")
    try{
         const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
         res.status(200).json(updatedUser);
    }
    catch(err){
      res.status(500).json(err);
    }
 }

 ///DELETE User
export const deleteUser = async(req,res)=>{
    // res.send("Hello User endpoint...")
    try{
         await User.findByIdAndDelete(req.params.id);
         res.status(200).json("User has been deleted Successfully...!!!");
    }
    catch(err){
     res.status(500).json(err);
    }
 }
///GET

export const getone = async(req,res)=>{
    // res.send("Hello User endpoint...")
    try{
         const hot = await User.findbyId(req.params.id);
         res.status(200).json(hot);
    }
    catch(err){
     res.status(500).json(err);
    }
 }


 ///GET ALL

export const GETALL = async(req,res)=>{
    // res.send("Hello User endpoint...")
    try{
         const Users = await User.find();
         res.status(200).json(Users);
    }
    catch(err){
     res.status(500).json(err);
    }
 }
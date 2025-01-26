import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import hotelRoute from './routes/hotel.js'
import roomsRoute from './routes/rooms.js'
import userRoute from './routes/user.js'
import cookieParser from 'cookie-parser'

const app = express();
dotenv.config()

const connect = async()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB..")
  } catch (error) {
    throw error
  }
}
app.get("/",(req,res)=>{
    res.send("Hello booking app...")
})
mongoose.connection.on("connected", ()=>{
    console.log("MongoDB is Connected...")
})
mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB is Disconnected...")
})

////use middlewares
app.use(express.json())
app.use(cookieParser())


app.use("/auth", authRoute)
app.use("/hotel", hotelRoute)
app.use("/rooms", roomsRoute)
app.use("/user", userRoute)


///ERROR HANDLER
app.use((err,req,res,next)=>{
    return res.status(500).json("Error Occured..!!!!");

})




app.listen(8800,()=>{
    connect();
    console.log("Connected to Backend..!!!");
})
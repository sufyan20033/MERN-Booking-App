import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async (req, res) => {

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            phone: req.body.phone,
        })
        await user.save();
        res.status(420).send("User has been created successfully....")
    }
    catch (err) {
        res.status(500).json(err)
    }
}
export const login = async (req, res) => {

    try {
        const lusername = await User.findOne({ username: req.body.username })
        if (!lusername) { return res.status(404).json("User does not found!!!") };
        const lpassword = await bcrypt.compare(req.body.password, lusername.password)
        if (!lusername.password == lpassword)  {return res.status(420).json("Incorrect Username or Password...!!!")};

        const token = jwt.sign({id:lusername._id,admin:lusername.admin}, process.env.JWT)
        const {password, admin, ...otherDetails} = lusername._doc;

        res.cookie("access_token",token,{ httpOnly: true,}).status(420).json({...otherDetails});
    }
    catch (err) {
        res.status(500).json("Incorrect Username or Password...!!!")
    }
}
///UNz78BCnyI82ERa0G9mZ1076jWNHLYoWJ4STxkmyvDU=
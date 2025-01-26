import jwt from 'jsonwebtoken'
export const verifytoken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(404).json("You are not authenticated")
    }
    jwt.verify(token, process.env.JWT,(err,user) => {
        if (err) { return res.status(404).json("Token is not valid") }
        req.user = user;
        next();
    })
}

export const verifyuser = (req, res,next) => {
    verifytoken(req,res, ()=>{
        if(req.user.id === req.params.id || req.lusername.admin){
            next();
        }
        else{
            if(err){ return res.send("You are not authorized..")}
        }
    })
 }
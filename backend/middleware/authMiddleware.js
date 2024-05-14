const  jwt =require( 'jsonwebtoken')
const  asyncHandler =require( 'express-async-handler')
const  User =require( '../models/userModel.js')

const protect = asyncHandler(async (req, res, next) => {
  const cookie=req.cookies.token;
    if(!cookie){
      throw new Error('token not found')
    }
     jwt.verify(String(cookie),process.env.SECRET_KEY,async(err,user)=>{
        if(err){
          throw new Error('invalid token provided')
        }
        const u=await User.findOne({"_id":user._id});
        req.user=u;
        next()
    }
    
    )
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

module.exports= { protect, admin }

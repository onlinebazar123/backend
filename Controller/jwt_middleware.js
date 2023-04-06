require('dotenv').config()

 const verifyToken = (req,res,next)=>{
    const bearerHeader = req.headers['authentication'];
    if(typeof bearerHeader !== 'undefined'){
       const bearer = bearerHeader.split(" ");
       const token = bearer[1];
       console.log(token)
       req.token = token;
       next()
    }
    else{
        res.send({
            result:'Token is not valid'
        })
    }
   
}
module.exports = verifyToken;
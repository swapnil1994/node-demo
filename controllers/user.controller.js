const mongoose = require('mongoose');


const User = mongoose.model('User');
module.exports.register = (req,res,next) => {
    var user = new User();
    user.userName = req.body.userName;
    user.designation = req.body.designation;
    user.location = req.body.location;
    user.birthDate = req.body.birthDate;
    user.password = req.body.password;
    user.save((err, doc) => {
        if(!err)
        res.send(doc);
        else
        {
            if(err.code == 11000)
            res.status(422).send(['Duplicate username found']);
            else
            return next(err);
        }
    });
}

module.exports.registerr = async(req,res)=>{
    
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message: error})
        
    }
}
module.exports.registerrs = async(req,res)=>{
    
    try {
        const users = await User.findById(req.params.userId);
        res.json(users);
    } catch (error) {
        res.json({message: error})
        
    }
}
module.exports.registerrss = async(req,res)=>{
   const user ={ 
    userName : req.body.userName,
    designation: req.body.designation,
    location: req.body.location,
    birthDate:req.body.birthDate,
    password: req.body.password,
   };
   const updatedUser =await User.findByIdAndUpdate({_id: req.params.userId}, user);
   res.json(updatedUser);
}
module.exports.registerrrs = async(req,res)=>{
    
    try {
        const removeUser = await User.findByIdAndDelete(req.params.userId);
        res.json(removeUser);
    } catch (error) {
        res.json({message: error})
        
    }
}
const User= require('../model/index')
exports.getUser= (req,res)=>
{ const users = User.find().select('name phone email city country')
.then((users) => {
    res.json({ total: users.length, users });
})
.catch(err => console.log(err))
}
exports.createUser=  (req,res)=>
{
    const user= new User({
        name :req.body.name,
        phone :req.body.phone,
        email :req.body.email,
        city :req.body.city,
        country:req.body.country
    }) 
    user.save().then(user=>{
       res.json({
            message:"created a database successgfuly"
        })
    }).catch(err => console.log("error check :",err))
}

exports.deleteUser = (req,res) => {
    User.deleteOne({name : req.body.name}, (err,result) => {
        if(err) 
            throw err
        res.send('User is deleted.')
    })
}

exports.updateUser = (req,res) => {
    try {
         User.updateOne({name: req.body.oldname}, {$set: {name:req.body.name, phone:req.body.phone, email:req.body.email,city:req.body.city,country:req.body.country}});
        res.send("User Updated Successfully!");
    } 
    catch (error) {
        res.send(error);
    }
}
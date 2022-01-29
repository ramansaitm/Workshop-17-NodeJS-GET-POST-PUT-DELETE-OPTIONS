exports.createValidator=(req,res,next)=>
{

//name
req.check('name',"Write a name").notEmpty()
 req.check('name',"name must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
});
//country
req.check('country',"Write a name").notEmpty()
 req.check('country',"name must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
});


//check error
const errors= req.validationErrors()
if(errors){
    const firstError=errors.map(error=> error.msg)[0]
    return res.status(400).json({error:firstError})
}
next();
};
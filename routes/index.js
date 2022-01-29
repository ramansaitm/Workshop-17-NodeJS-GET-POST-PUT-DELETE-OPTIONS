const express=require('express')
const {createUser, getUser,updateUser,deleteUser}=require('../container/index')
const validator=require('../validator/index')
const router=express.Router();

router.get('/',getUser);
router.post('/',validator.createValidator,createUser)
router.delete('/',deleteUser)
router.put('/',updateUser)

module.exports=router
const express=require('express');
const {findone,findall,updateone}=require('../controller/studlcontroller');
const studRouter=express.Router();



studRouter.get("/all",findall);
studRouter.get("/one",findone);
studRouter.post("/update",updateone);

module.exports=studRouter;
const studl=require("../model/studlSchema");

const findall=async(req,res)=>{
    try{
        const data=await studl.find();
        console.log(data);
        res.status(200).json({data,message:"success"});
    }catch(error){
        res.status(404).json({error,message:"not found"});
    }
}
const findone=async(req,res)=>{
    try{
        const data=await studl.findOne({admno:req.query.admno});
        res.status(200).json({data,message:"success"});
    }catch(error){
        res.status(404).json({error,message:"not found"});
    }
}
const updateone=async(req,res)=>{
    try{
        studl.updateOne({admno:req.body.admno},{$set:{
            aadharno:req.body.aadharno,classr:req.body.classr,        
            stuname:req.body.stuname,unit:req.body.unit,section:req.body.section,rollno:req.body.rollno,
            dob:req.body.dob,mothert:req.body.mothert,caste:req.body.caste,religion:req.body.religion,
            flan:req.body.flan,sex:req.body.sex,bloodgr:req.body.bloodgr,transport:req.body.transport,
            fname:req.body.fname,fedu:req.body.fedu,foccu:req.body.foccu,ftel:req.body.ftel,mname:req.body.mname,
            medu:req.body.medu,moccu:req.body.moccu,mtel:req.body.mtel,resiprnts:req.body.resiprnts,
            resiphone:req.body.resiphone,income:req.body.income,gtel:req.body.gtel,active:req.body.active,
        }});
    }
    catch(error){
        res.status(404).json({error,message:"not found"});
    }
}

module.exports={findone,findall,updateone};
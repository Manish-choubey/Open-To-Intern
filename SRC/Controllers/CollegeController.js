const CollegeModels = require('../Models/CollegeModels')
const InternMOdels= require('../Models/InternModels')


const creatcollege = async function(req,res){
    try{
        if(req.body && Object.keys(req.body).length>0){
            let college = await CollegeModels.create(req.body)
            res.status(201).send({status:true,data:college})
        }else{
            res.status(400).send({status:false,msg:'request must be contain a valid'})
        }
    }catch(error){
        res.status(500).send({status:false,msg:error.massage})
    }

}

let collegeDetails = async function(req,res){
    try{
        if(req.query.collegeName){
            let college = await CollegeModels.findOne({name:req.query.collegeName,isDeleted:false})
            if(!college){
                res.status(404).send({status:false,msg:"college not found in query"})
            }else{
                let collegeData = {
                    name: college.name,
                    fullName:college.fullName,
                    logoLink: college.logoLink
                }
                let intern = await InternMOdels.find({collegeId:college._id,isDeleted:false},'-collegeId -isDeleted -createdAt-updatedAt').sort({createdAt:-1})
                if(intern){
                   collegeData.intern = intern
                }
                res.status(201).send({status:true,data:collegeData})
            }
        }else{
            res.status(400).send({status:false,msg:"collegeName must be present in query"})

        }
    }catch(error){
        res.status(500).send({status:false,msg:error.massage})
    }
}









module.exports.collegeDetails=collegeDetails
module.exports.creatcollege= creatcollege



const ProjectModel = require("../models/ProjectModel");

const mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId;

const CreateProjectService=async (req)=>{
    try{
        let reqBody=req.body;
        let data= await ProjectModel.create(reqBody)
        return {status:'success',msg:'Project Created Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Project is not Created',err:e.toString()}
    }
}


const ReadProjectService=async ()=>{
    try{
        const data=await ProjectModel.find()
        return {status:'success',msg:'All Project Data',data:data}
    }catch(e){
        return {status:'failed',data:e.toString()}
    }
}

const UpdateProjectService=async (req)=>{
    try{
        const projectID=new ObjectId(req.params.ID)
        let reqBody=req.body;
        let data= await ProjectModel.updateOne({_id:projectID},{$set:reqBody},{upsert:true})
        return {status:'success',msg:'Project Data Saved Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Project is not Updated',err:e.toString()}
    }
}

const DeleteProjectService=async (req)=>{
    try{
        const projectID=new ObjectId(req.params.ID)
        let data= await ProjectModel.deleteOne({_id:projectID})
        return {status:'success',msg:'Project Data Deleted Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Project Data is not Deleted',err:e.toString()}
    }
}

const ReadProjectByIDService=async (req)=>{
    try{
        const projectID=new ObjectId(req.params.ID)
        let data= await ProjectModel.findOne({_id:projectID})
        return {status:'success',msg:'Single Project Data found Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Single Project is not Found',err:e.toString()}
    }
}

const ReadProjectBySimilaritiesService=async (req)=>{
    try{
        const projectID=new ObjectId(req.params.ID)
        let projectType= await ProjectModel.findOne({_id:projectID}).select('projectType')
        let data= await ProjectModel.find({projectType:projectType['projectType']})
        return {status:'success',msg:'Similar Project Data found Successfully',data:data}

    }catch (e) {
        return {status:'failed',msg:'Similar Project is not Found',err:e.toString()}
    }
}


module.exports={
    CreateProjectService,
    ReadProjectService,
    UpdateProjectService,
    DeleteProjectService,
    ReadProjectByIDService,
    ReadProjectBySimilaritiesService
}
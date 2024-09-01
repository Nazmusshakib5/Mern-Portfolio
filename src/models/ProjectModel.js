const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    projectTitle:{type:String,required:true},
    projectImage:{type:String,required:true},
    projectType:{type:String,required:true},
    projectDetails:{type:String,required:true}
},{timestamps:true,versionKey:false})

const ProjectModel=mongoose.model('projects',DataSchema)

module.exports=ProjectModel;
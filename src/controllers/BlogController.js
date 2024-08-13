const {ShowBlogService,UpdateBlogService,CreateBlogService,DeleteBlogService} = require("../services/BlogService");


exports.ShowBlogList=async (req,res)=>{
    const data=await ShowBlogService();
    return res.status(200).json(data)
}

exports.UpdateBlogList=async (req,res)=>{
    const data=await UpdateBlogService(req);
    return res.status(200).json(data)
}


exports.CreateBlogList=async (req,res)=>{
    const data=await CreateBlogService(req);
    return res.status(200).json(data)
}

exports.DeleteBlogList=async (req,res)=>{
    const data=await DeleteBlogService(req);
    return res.status(200).json(data)
}
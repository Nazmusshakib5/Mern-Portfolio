const express=require('express')
const BlogController=require('../controllers/BlogController')

const router=express.Router()

router.get('/blog',BlogController.ShowBlogList)
router.post('/saveBlog/:blogID',BlogController.UpdateBlogList)
router.post('/createBlog',BlogController.CreateBlogList)
router.get('/deleteBlog/:blogID',BlogController.DeleteBlogList)

module.exports=router;
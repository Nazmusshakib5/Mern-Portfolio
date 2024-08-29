const express=require('express')
const BlogController=require('../controllers/BlogController')
const UserController=require('../controllers/UserControllers')
const authMiddleWare=require('../middlewares/authMiddleWare')

const router=express.Router()


//Blog API
router.get('/blog',BlogController.ShowBlogList)
router.post('/saveBlog/:blogID',authMiddleWare,BlogController.UpdateBlogList)
router.post('/createBlog',authMiddleWare,BlogController.CreateBlogList)
router.get('/deleteBlog/:blogID',authMiddleWare,BlogController.DeleteBlogList)
router.get('/readBlog/:blogID',authMiddleWare,BlogController.ReadSingleBlog)

//User API
router.post('/login',UserController.VerifyUserLogin)
router.get('/logout',UserController.UserLogout)
module.exports=router;
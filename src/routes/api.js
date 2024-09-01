const express=require('express')
const BlogController=require('../controllers/BlogController')
const UserController=require('../controllers/UserControllers')
const ProjectController=require('../controllers/PorjectController')
const authMiddleWare=require('../middlewares/authMiddleWare')

const router=express.Router()


//Blog API
router.get('/blog',BlogController.ShowBlogList)
router.post('/saveBlog/:blogID',authMiddleWare,BlogController.UpdateBlogList)
router.post('/createBlog',authMiddleWare,BlogController.CreateBlogList)
router.get('/deleteBlog/:blogID',authMiddleWare,BlogController.DeleteBlogList)
router.get('/readBlog/:blogID',authMiddleWare,BlogController.ReadSingleBlog)


//Project Api
router.post('/createProject',ProjectController.CreateProjects)
router.post('/updateProject/:ID',ProjectController.UpdateProjectByID)
router.get('/deleteProject/:ID',ProjectController.DeleteProjectByID)
router.get('/readProject',ProjectController.ReadProjects)
router.get('/readProjectByID/:ID',ProjectController.ReadProjectByID)
router.get('/readProjectBySimilarities/:ID',ProjectController.ReadProjectBySimilarities)


//User API
router.post('/login',UserController.VerifyUserLogin)
router.get('/logout',UserController.UserLogout)
module.exports=router;
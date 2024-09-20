import './MyWork.css'
import {useEffect, useState} from "react";
import Pagination from "../SmallComponents/Pagination.jsx";
import axios from "axios";
import {Link} from "react-router-dom";
import LoaderBar from "../SkeletonLoader/LoaderBar.jsx";
import {motion} from "framer-motion";
import {FadeIn} from "../../variant.js";

const MyWork = () => {
    //fetch data ,create a useState for data,use it in useEffect in IIF

    const [blogs,setBlogs]=useState(null)

    const ShowBlog=async ()=>{
        const data=await  axios.get('/api/v1/blog')
        setBlogs(data['data']['data'])
    }
    useEffect(() => {
        (async ()=>{
            await ShowBlog()
        })()
    }, []);

    const [currentPage,setCurrentPage]=useState(1)
    const [postperPage,setPostperPage]=useState(3)
    let lastItemOfPage=currentPage*postperPage
    let firstItemOfPage=lastItemOfPage-postperPage
    let CurrentPageData=blogs!==null && blogs.slice(firstItemOfPage,lastItemOfPage)

    return (
        blogs!==null?<section className='container mx-auto'>
            <div className='text-center mb-10'><h2 className='text-4xl font-semibold CustomTextOne uppercase'>Blogs</h2></div>
            <motion.div
                variants={FadeIn('up',0.2)}
                initial={'hidden'}
                whileInView={'show'}
                viewport={{once:false,amount:0.7}}
                className='md:grid grid-cols-3 flex flex-col w-full gap-5'>
                {
                    CurrentPageData.map((item,i)=>{
                        return (
                            <Link to={`/blogDetails/${item['_id']}`} key={i} className="card CustomBgOne shadow-xl">
                                <div className="card-body CustomTextOne">
                                    <img src={item['blogImage']} alt='image' className='h-[150px] rounded-md'/>
                                    <h2 className="text-xl font-bold text-center">{item['blogTitle']}</h2>
                                </div>
                            </Link>
                        )
                    })
                }

            </motion.div>
            <Pagination postPerPage={postperPage}
                        totalPost={blogs.length}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
            />
        </section>

    :<LoaderBar/>);
};

export default MyWork;
import './MyWork.css'
import {useEffect, useState} from "react";
import Pagination from "../SmallComponents/Pagination.jsx";
import axios from "axios";
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
            <div className='text-center mb-10'><h2 className='text-4xl font-semibold text-amber-50 uppercase'>Blogs</h2></div>
            <div className='md:grid grid-cols-3 flex flex-col w-full gap-5'>
                {
                    CurrentPageData.map((item,i)=>{
                        return (
                            <div key={i} className="card CustomBgOne shadow-xl">
                                <div className="card-body text-amber-50">
                                    <h2 className="card-title">{item['blogTitle']}</h2>
                                    <img src={item['blogImage']} alt='image' className='h-[150px]'/>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <Pagination postPerPage={postperPage}
                        totalPost={blogs.length}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
            />
        </section>

    :'no data');
};

export default MyWork;
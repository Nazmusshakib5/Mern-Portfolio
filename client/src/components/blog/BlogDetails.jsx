import {useEffect, useState} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import LoaderBar from "../SkeletonLoader/LoaderBar.jsx";
import {useNavigate} from "react-router-dom";

const BlogDetails = () => {

    const [relatedBlogs, setRelatedBlogs] = useState(null)
    const [singleBlogs, setSingleBlog] = useState('')
    const [blog,setBlog]=useState('')
    const navigate=useNavigate()

    const {ID} = useParams()

    const fetchRelatedBlog = async () => {
        let data = await axios.get(`/api/v1/readBlogBySimilarities/${ID}`)
        setRelatedBlogs(data['data']['data'])
    }
    const fetchSingleBlog = async () => {
        let data = await axios.get(`/api/v1/readBlog/${ID}`)
        setSingleBlog(data['data']['data'])
    }

    const SimilarBlogNavigate=(id)=>{
        setBlog(id)
        navigate(`/blogDetails/${id}`)
    }

    useEffect(() => {
        (async () => {
            await fetchSingleBlog()
            await fetchRelatedBlog()
        })()
    }, [blog]);
    console.log(singleBlogs)
    return (
        relatedBlogs !== null ? <div className='flex md:flex-row flex-col items-start CustomBgOne relative mx-auto'>
                <div className=' w-full md:w-1/4 sticky top-[120px] flex flex-col gap-5 mt-10 px-6 bg-black md:bg-transparent'>
                    <h1 className='font-bold CustomTextOne text-center text-2xl'>Similar Blogs</h1>
                    {
                        relatedBlogs.map((item, i) => {
                            return (
                                <div key={i} onClick={()=>SimilarBlogNavigate(item['_id'])}
                                     className='w-full CustomBgFive font-semibold text-black text-xl px-5 py-3
                                      shadow-md rounded-lg flex items-center gap-2 hover:opacity-80'>
                                    <img src={item['blogImage']} className='w-1/4 p-1 border-2 border-black' alt='image'/>
                                    <p>{item['blogTitle']}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' CustomBgFour w-full md:w-3/4 px-5'>
                    <div className='CustomBgOne w-full'>
                        <img src={singleBlogs['blogImage']} className='w-full p-10' alt='image'/>
                        <p className='text-xl CustomTextOne font-bold pb-10 px-10'>{singleBlogs['blogTitle']}</p>
                        <p className='text-md CustomTextOne font-bold pb-10 px-10'>{singleBlogs['blogDetails']}</p>
                    </div>
                </div>
            </div>
            : <LoaderBar/>);
};

export default BlogDetails;
import DashboardPage from "./DashboardPage.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


const DashBoardHomePage = () => {

    const [blogs,setBlogs]=useState(null)
    const [refresh,setRefresh]=useState(false)
    const bodyData={blogTitle:'Updated Data'}
    const UpdateBlog=async (id,bodyData)=>{
        await axios.post(`/api/v1/saveBlog/${id}`,bodyData)
        setRefresh(!refresh)
        console.log(id)
    }
    const ShowBlog=async ()=>{
        const data=await  axios.get('/api/v1/blog')
        setBlogs(data['data']['data'])
    }
    useEffect(() => {
        (async ()=>{
            await ShowBlog()
        })()
    }, [refresh]);
    console.log(blogs)
    return (blogs!==null? <DashboardPage>
        <div>
            <div className="p-12 bg-white m-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr className='grid grid-cols-12 text-2xl text-gray-600'>
                        <th className='col-span-1'>Sl</th>
                        <th className=' col-span-7'>BlogTitle</th>
                        <th className=' col-span-2'>Edit</th>
                        <th className=' col-span-2'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {blogs.map((item, i) => {
                        return (<tr key={i} className='grid grid-cols-12'>
                            <th className='col-span-1 my-auto'>{i + 1}</th>
                            <td className='col-span-7 my-auto'>{item['blogTitle']}</td>
                            <td className='col-span-2'>
                                <button type="button" onClick={()=>UpdateBlog(item['_id'],bodyData)}
                                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600
                                        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300
                                 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                                         font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >Edit
                                </button>
                            </td>
                            <td className='col-span-2'>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600
                                                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300
                                                 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg
                                                    dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5
                                                     text-center me-2 mb-2">Delete
                                </button>
                            </td>
                        </tr>)
                    })}

                    </tbody>
                </table>
            </div>
        </div>
    </DashboardPage>:'not found');
};

export default DashBoardHomePage;
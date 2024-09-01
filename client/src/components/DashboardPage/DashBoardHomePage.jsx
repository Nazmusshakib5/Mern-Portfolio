import DashboardPage from "./DashboardPage.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import LoaderBar from "../SkeletonLoader/LoaderBar.jsx";


const DashBoardHomePage = () => {

    const [blogs,setBlogs]=useState(null)
    const [refresh,setRefresh]=useState(false)

    const ShowBlog=async ()=>{
        const data=await  axios.get('/api/v1/blog')
        setBlogs(data['data']['data'])
    }

    const deleteBlog= async (id)=>{
        await axios.get(`/api/v1/deleteBlog/${id}`)
        setRefresh(!refresh)
    }


    useEffect(() => {
        (async ()=>{
            await ShowBlog()
        })()
    }, [refresh]);
    console.log(blogs)
    return (blogs!==null? <DashboardPage>
        <div>
            <div className="p-12 bg-white m-5 rounded-md">
                <table className=" w-full">
                    {/* head */}
                    <thead>
                    <tr className='grid grid-cols-12 text-2xl text-gray-600 text-left'>
                        <th className='col-span-1 text-center'>Sl</th>
                        <th className=' col-span-7'>BlogTitle</th>
                        <th className=' col-span-2'>Edit</th>
                        <th className=' col-span-2'>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {blogs.map((item, i) => {
                        return (<tr key={i} className='grid grid-cols-12 shadow-lg mt-2 p-2'>
                            <th className='col-span-1 my-auto'>{i + 1}</th>
                            <td className='col-span-7 my-auto'>{item['blogTitle']}</td>
                            <td className='col-span-2'>
                                <Link to={`/dashboard/update/${item['_id']}`}
                                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600
                                        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300
                                 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                                         font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >Edit
                                </Link>
                            </td>
                            <td className='col-span-2'>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600
                                                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300
                                                 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg
                                                    dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5
                                                     text-center me-2 mb-2"
                                        onClick={()=>document.getElementById(`modal${i}`).showModal()}
                                >Delete
                                </button>

                            </td>

                        </tr>)
                    })}

                    {
                        blogs.map((item,i)=>{
                            return (
                                <dialog key={i} id={`modal${i}`} className="modal">
                                    <div className="modal-box bg-white">
                                        <h3 className="font-bold text-lg text-center">Are You Sure ?</h3>
                                        <div className="modal-action flex justify-center">
                                            <form method="dialog" className='flex gap-3'>
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-success text-white px-5"
                                                onClick={()=>deleteBlog(item['_id'])}
                                                >Yes</button>
                                                <button className="btn btn-success text-white px-6">No</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            )
                        })
                    }

                    </tbody>
                </table>
            </div>
        </div>
    </DashboardPage> : <LoaderBar/>);
};

export default DashBoardHomePage;
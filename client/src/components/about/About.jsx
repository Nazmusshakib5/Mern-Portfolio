import './About.css'
import {useEffect, useState} from "react";
import axios from "axios";
import LoaderBar from "../SkeletonLoader/LoaderBar.jsx";

const About = () => {
    const [projects,setProjects]=useState(null)

    const ShowBProject=async ()=>{
        const data=await  axios.get('/api/v1/readProject')
        setProjects(data['data']['data'])
    }
    useEffect(() => {
        (async ()=>{
            await ShowBProject()
        })()
    }, []);


    return (
        projects!==null?<div id='projects' className='aboutSection w-full pb-28 pt-28 CustomBgFour md:px-0 px-3'>
            <div><h1 className='text-amber-50 text-center text-4xl mb-14 font-bold uppercase'>New Projects</h1></div>
            <div className='container md:grid grid-cols-3 gap-10 flex flex-col'>
                {
                    projects.map((item,i)=>{
                        return (<div key={i}
                                 onClick={() => document.getElementById(`myModal${i}`).showModal()}
                                className="card cardBg text-white shadow-sm shadow-cyan-600 hover:bg-base-100
                                 hover:opacity-80 rounded-none">
                            <div className="card-body pb-2 pt-0 px-0">
                                <img src={item['projectImage']} alt='image' className='h-[190px]'/>
                                <div className="card-actions justify-center">
                                    {/*<button onClick={() => document.getElementById(`myModal${i}`).showModal()}*/}
                                    {/*        className="bg-emerald-700 px-8 py-2 rounded-xl">Open*/}
                                    {/*</button>*/}
                                    <h2 className="card-title my-2">{item['projectTitle']}</h2>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    projects.map((item,i)=>{
                        return (
                            <dialog key={i} id={`myModal${i}`} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box ">
                                    <h3 className="font-bold  text-amber-50 mb-3 text-center
                                    text-2xl">{item['projectTitle']}</h3>
                                    <img src={item['projectImage']} alt='image'/>
                                    <p className='text-amber-50 mt-3'>{item['projectDetails']}</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        )
                    })
                }
            </div>

        </div>
    :<LoaderBar/>);
};

export default About;


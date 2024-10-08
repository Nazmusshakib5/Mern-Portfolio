import './DashboardPage.css'
import {VscThreeBars} from "react-icons/vsc";
import {RxAvatar} from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {useEffect, useState} from "react";
import DashSideBar from "./DashSideBar.jsx";
import ValidationHelper from '../../Utility/IsLoggedIn.js'
import {useNavigate} from "react-router-dom";
import axios from "axios";


const DashboardPage = (props) => {
    const navigate=useNavigate()
    const [isSideBar,setIsSideBar]=useState(true)
    const SideBarState=()=>{
            setIsSideBar(!isSideBar)
            if(!isSideBar){
                const sideState= document.getElementById('sideBar');
                const contentState=document.getElementById('contentBar')
                sideState.classList.add('sideBarGrow')
                sideState.classList.remove('sideBarShrink')
                contentState.classList.remove('contentBarGrow')
                contentState.classList.add('contentBarShrink')

            }else {
                const sideState= document.getElementById('sideBar');
                const contentState=document.getElementById('contentBar')
                sideState.classList.remove('sideBarGrow')
                sideState.classList.add('sideBarShrink')
                contentState.classList.add('contentBarGrow')
                contentState.classList.remove('contentBarShrink')
            }
    }
    const HandleLogout=async ()=>{
        await axios.get('/api/v1/logout')
        navigate('/login')
    }


    useEffect(() => {
        if(!ValidationHelper.IsLogin()){
            navigate('/login')
        }
    }, [navigate]);

    return (
        <div>
            <nav className='w-full h-[10vh] bg-black text-emerald-50 flex justify-between items-center px-2 text-3xl'>
                <div><VscThreeBars onClick={()=>SideBarState()}/></div>
                <div className='flex items-center gap-5'><RxAvatar/>
                <div className='flex items-center gap-2 p-2 bg-emerald-900 rounded-lg text-xl md:mr-2'
                    onClick={()=>HandleLogout()}>
                    <RiLogoutCircleRLine/>Logout</div>
                </div>
            </nav>
            <div className="flex bg-white">
                <div className='min-h-[90vh] pt-20  sideBarGrow' id='sideBar'>
                    <DashSideBar/>
                </div>
                <div className='min-h-[90vh] w-full contentBar CustomBgFive' id='contentBar'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
import './DashboardPage.css'
import {VscThreeBars} from "react-icons/vsc";
import {RxAvatar} from "react-icons/rx";
import {useState} from "react";
import DashSideBar from "./DashSideBar.jsx";


const DashboardPage = (props) => {
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
    console.log(isSideBar)

    return (
        <div>
            <nav className='w-full h-[10vh] bg-black text-emerald-50 flex justify-between items-center px-2 text-3xl'>
                <div><VscThreeBars onClick={()=>SideBarState()}/></div>
                <div><RxAvatar/></div>
            </nav>
            <div className="flex bg-white">
                <div className='min-h-[90vh] pt-20  sideBarGrow' id='sideBar'>
                    <DashSideBar/>
                </div>
                <div className='min-h-[90vh] w-full contentBar bg-[#999999]' id='contentBar'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
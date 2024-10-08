import {Link} from "react-router-dom";


const DashSideBar = () => {
    return (
        <div className="flex flex-col gap-5 px-2 py-2   min-h-full ">
            <Link to='/dashboard' className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>Dashboard
            </Link>
            <Link to='/dashboard/blogs' className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>All Blogs
            </Link>

            <Link to='/dashboard/createblog' className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>Post Blog
            </Link>
            <Link to='/dashboard/createProject' className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>Projects
            </Link>
           {/* <div className=' py-2 px-3 text-[#262626] uppercase*/}
           {/*rounded-xl font-semibold text-xl text-center'>Settings*/}
           {/* </div>*/}

        </div>
    );
};

export default DashSideBar;
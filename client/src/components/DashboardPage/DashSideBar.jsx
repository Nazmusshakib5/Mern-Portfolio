import {Link} from "react-router-dom";


const DashSideBar = () => {
    return (
        <div className="flex flex-col gap-5 px-2 py-2   min-h-full border-r-2">
            <Link to='/blogs' className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>All Blogs
            </Link>

            <div className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>Post Blog
            </div>
            <div className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>Projects
            </div>
            <div className=' py-2 px-3 text-[#262626] uppercase
           rounded-xl font-semibold text-xl text-center'>Settings
            </div>

        </div>
    );
};

export default DashSideBar;
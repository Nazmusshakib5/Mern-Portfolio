import DashboardPage from "./DashboardPage.jsx";
import ProjectList from "./ProjectList.jsx";

const DashboardLandingPage = () => {
    return (
        <DashboardPage>
            <div className='w-full flex gap-5 p-5 text-white'>
                <div className='w-1/3 py-10 bg-emerald-400 shadow-md p-5 rounded-lg'>
                    <div><p className='uppercase'>Projects</p></div>
                    <div><p>23+ Done</p></div>
                </div>
                <div className='w-1/3 py-10 bg-emerald-900 shadow-md p-5 rounded-lg'>
                    <div><p className='uppercase'>Blogs</p></div>
                    <div><p>23+ posted</p></div>
                </div>
                <div className='w-1/3 py-10 bg-emerald-700 shadow-md p-5 rounded-lg'>
                    <div><p className='uppercase'>Messages</p></div>
                    <div><p>23+ unread</p></div>
                </div>
            </div>
           <div className='bg-white border-2 m-5 p-5 rounded-lg'>
               <ProjectList/>
           </div>
        </DashboardPage>
    );
};

export default DashboardLandingPage;
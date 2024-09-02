import DashboardPage from "./DashboardPage.jsx";

const DashboardLandingPage = () => {
    return (
        <DashboardPage>
            <div className='w-full h-[90vh] flex gap-5 p-5 text-white'>
                <div className='w-1/3 h-1/3 bg-emerald-400 shadow-md p-5 rounded-lg'>
                    <div><p className='uppercase'>Projects</p></div>
                    <div><p>23+ Done</p></div>
                </div>
                <div className='w-1/3 h-1/3 bg-emerald-900 shadow-md p-5 rounded-lg'>
                    <div><p className='uppercase'>Blogs</p></div>
                    <div><p>23+ posted</p></div>
                </div>
                <div className='w-1/3 h-1/3 bg-emerald-700 shadow-md p-5 rounded-lg'>
                    <div><p className='uppercase'>Messages</p></div>
                    <div><p>23+ unread</p></div>
                </div>
            </div>
        </DashboardPage>
    );
};

export default DashboardLandingPage;
import './Home.css'

import workingLate from '../../assets/workingLate.svg'
const Home = () => {
    return (
        <div>
            <section className='hero-section shadow-lg shadow-emerald-950  CustomBgOne' id='home'>
                <div className='grid grid-cols-12 items-center justify-center min-h-screen'>
                    <div className='col-span-12 md:col-span-4  px-12 md:px-0 md:p-12'>
                        <img className='w-full lg:ms-10 md:ms-5' src={workingLate} alt='image'/>
                    </div>
                    <div className=' lg:ml-24 md:ml-16 md:col-span-8 col-span-12 px-10 md:px-0'>
                    <h4 className='CustomTextOne md:text-7xl text-3xl uppercase'>I'M Nazmus Shakib</h4>
                        {/*<p className='text-amber-50 md:text-7xl mt-3 text-5xl'>Personal Portfolio for</p>*/}
                        <p className='CustomTextOne md:text-6xl mt-3 text-2xl py-1'>Web Developer</p>
                        <div className='flex flex-col md:flex-row md:gap-4 gap-3 justify-start'>
                            <button className='CustomButtonOne rounded-md md:text-xl px-3 py-2
                            mt-5'>Download CV
                            </button>
                            <button className='CustomButtonOne rounded-md md:text-xl px-3 py-2
                           mt-5'>Hire me
                            </button>
                        </div>
                    </div>
                </div>
                {/*<div className='movingWords shadow-md shadow-emerald-950'>*/}
                {/*    <h1>Fully Responsive Services</h1>*/}
                {/*    <h1>Simple and minimalistic looks</h1>*/}
                {/*</div>*/}
            </section>
        </div>
    );
};

export default Home;

// style={ {   backgroundImage:`url(${GreenBG})`,
//     width:"100%",
//     height:"100vh",
//     backgroundRepeat:"no-repeat",
//     backgroundSize:'cover'
// }}
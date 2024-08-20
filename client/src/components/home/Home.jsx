import './Home.css'

import GreenBG from '../../assets/greenBlack5.jpg'
const Home = () => {
    return (
        <div>
            <section className='hero-section  ' id='home'>
                <div className='hero-bg flex items-center justify-center'
                style={
                    {   backgroundImage:`url(${GreenBG})`,
                        width:"100%",
                        height:"90vh",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:'cover'
                    }
                }>
                    <div></div>
                    <div className='text-center md:ml-24 '>
                        <h4 className='text-amber-50 md:text-7xl text-3xl'>All in One</h4>
                        <p className='text-amber-50 md:text-7xl mt-3 text-5xl'>Personal Portfolio for</p>
                        <p className='text-amber-50 md:text-7xl mt-3 text-2xl'>Web Developer</p>
                        <div className='flex flex-col md:flex-row md:gap-4 gap-3 justify-center'>
                            <button className='text-amber-400 md:rounded-2xl rounded-xl md:text-xl px-3 py-1.5
                          border-solid border-2 border-b-amber-400 mt-5
                          hover:bg-amber-500 hover:text-amber-50 hover:border-b-amber-100'>Hire me
                            </button>
                            <button className='text-amber-400 md:rounded-2xl rounded-xl md:text-xl px-3 py-1.5
                          border-solid border-2 border-b-amber-400 mt-5
                          hover:bg-amber-500 hover:text-amber-50 hover:border-b-amber-100'>Download CV
                            </button>
                        </div>
                    </div>
                </div>
                <div className='movingWords shadow-md shadow-emerald-950'>
                    <h1>Fully Responsive Services</h1>
                    <h1>Simple and minimalistic looks</h1>
                </div>
            </section>
        </div>
    );
};

export default Home;
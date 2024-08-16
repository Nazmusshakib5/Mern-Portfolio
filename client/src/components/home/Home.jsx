import './Home.css'

import GreenBG from '../../assets/greenBlack3.jpg'
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
                    <div className='text-center md:ml-24'>
                        <h4 className='text-white md:text-7xl text-3xl'>All in One</h4>
                        <p className='text-white md:text-7xl mt-3 text-5xl'>Personal Portfolio for</p>
                        <p className='text-white md:text-7xl mt-3 text-2xl'>Web Developer</p>
                        <button className='text-green-700 md:rounded-2xl rounded-xl md:text-xl px-3 py-1.5
                         border-solid border-2 border-b-green-700 mt-5 lg:w-[120px] hire-btn'>Hire me</button>
                    </div>
                </div>
                <div className='movingWords shadow-lg shadow-emerald-950'>
                    <h1>Fully Responsive Services</h1>
                    <h1>Simple and minimalistic looks</h1>
                </div>
            </section>
        </div>
    );
};

export default Home;
import './Home.css'

import GreenBG from '../../assets/BlackBG1.jpg'
const Home = () => {
    return (
        <div>
            <section className='hero-section'>
                <div className='hero-bg flex md:grid grid-cols-2 items-center justify-center'
                style={
                    {   backgroundImage:`url(${GreenBG})`,
                        width:"100%",
                        height:"100vh",
                        backgroundRepeat:"no-repeat",
                        backgroundSize:'cover',
                        opacity:1
                    }
                }>
                    <div className='text-center md:ml-4'>
                        <h4 className='text-white md:text-4xl text-3xl'>Welcome</h4>
                        <p className='text-white md:text-7xl text-5xl'>I Am Nazmus Shakib</p>
                        <p className='text-white md:text-3xl mt-3 text-2xl'>Dhaka,Bangladesh</p>
                        <button className='text-green-700 md:rounded-2xl rounded-xl md:text-xl px-3 py-1.5
                         border-solid border-2 border-b-green-700 mt-5 lg:w-[120px] hire-btn'>Hire me</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
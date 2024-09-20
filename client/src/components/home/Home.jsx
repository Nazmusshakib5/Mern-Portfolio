import './Home.css'
import { Typewriter } from 'react-simple-typewriter'
import {motion} from "framer-motion";
import {FadeIn} from "../../variant.js";

import workingLate from '../../assets/ProgramingBro.svg'
const Home = () => {
    return (
        <div>
            <section className='hero-section shadow-lg shadow-emerald-950  CustomBgOne' id='home'>
                <div style={{overflow:"hidden"}} className='grid grid-cols-12 items-center justify-center md:min-h-screen'>
                    <motion.div
                        variants={FadeIn('right',0.2)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{once:false,amount:0.7}}
                        className='col-span-12 md:col-span-5 px-12 md:px-0 md:p-15 mt-5 md:mt-0'>
                        <img className='w-full lg:ms-10 md:ms-7 md:p-12' src={workingLate} alt='image'/>
                    </motion.div>
                    <motion.div
                        variants={FadeIn('left',0.2)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{once:false,amount:0.7}}
                        className=' lg:ml-24 md:ml-16 md:col-span-7 col-span-12 px-10 md:px-0'>
                        {/*<p className='CustomTextOne md:text-7xl mt-3 text-2xl py-1'>I'm</p>*/}
                        <p className='CustomTextOne md:text-7xl mt-3 text-3xl tracking-wider uppercase'>Nazmus Shakib</p>
                        <h4 className='CustomTextOne md:text-7xl text-2xl '>
                            I'm{' '}
                            <span className='CustomTextFour font-bold'>
                                <Typewriter
                                    words={['A Web Developer', 'A Web Designer']}
                                    loop={false}
                                    cursor
                                    // cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
        </span>

                        </h4>
                        {/*<p className='CustomTextOne md:text-6xl mt-3 text-2xl py-1'>Web Developer</p>*/}
                        <div className='flex flex-col md:flex-row md:gap-4 gap-3 justify-start'>
                            <button className='CustomButtonTwo rounded-md md:text-xl px-8 py-3 uppercase
                            font-semibold shadow-white shadow-sm
                            mt-5'>Download CV
                            </button>
                            <button className='CustomButtonTwo rounded-md md:text-xl px-8 py-3 uppercase
                            font-semibold shadow-white shadow-sm
                           mt-5 '>Hire me
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;

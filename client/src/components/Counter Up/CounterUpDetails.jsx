import './CounterUPDetails.css'
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import {useState} from "react";

const CounterUpDetails = () => {
    const [count,setCount]=useState(false)

    return (
        <div className='mt-28  shadow-lg pb-28 shadow-emerald-950'>
            <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
                <div
                    className='bg-[#020202] container border-y-2 border-emerald-900 text-center px-20 py-8 md:px-36 md:py-10
                 md:grid grid-cols-4 flex flex-col md:gap-0 gap-5'>
                    <div>
                        <h2 className='text-amber-300 text-5xl mb-2'>
                            {
                             count && <CountUp start={0} end={95} delay={0.25} duration={2.75}></CountUp>
                            }
                            %</h2>
                        <p className='whiteFont'>Project Done</p>

                    </div>
                    <div>
                        <h2 className='text-amber-300 text-5xl mb-2'>
                            {
                                count && <CountUp start={0} end={75} delay={0.25} duration={2.75}></CountUp>
                            }
                            %</h2>
                        <p className='whiteFont'>Satisfied Client</p>
                    </div>
                    <div>
                        <h2 className='text-amber-300 text-5xl mb-2'>
                            {
                                count && <CountUp start={0} end={55} delay={0.25} duration={2.75}></CountUp>
                            }
                            %</h2>
                        <p className='whiteFont'>Live Projects</p>
                    </div>
                    <div>
                        <h2 className='text-amber-300 text-5xl mb-2'>
                            {
                                count && <CountUp start={0} end={125} delay={0.25} duration={2.75}></CountUp>
                            }
                            +</h2>
                        <p className='whiteFont'>Project Sales</p>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default CounterUpDetails;
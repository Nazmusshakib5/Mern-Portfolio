import './Pricing.css'
import {useState} from "react";
const Pricing = () => {

    const [isYearly,setIsYearly]=useState(false)

    const packages=[
        {name:'Start',monthlyPrice:19,yearlyPrice:199,desc:'The starter deal is a basic and has limited access'},
        {name:'Advance',monthlyPrice:29,yearlyPrice:250,desc:'The Advance deal is a modest and has limited access'},
        {name:'Premium',monthlyPrice:39,yearlyPrice:320,desc:'The starter deal is a novel and does not have limited access'}
    ]

    const packageFeature=['Video Lessons','Homework Check','Additional Practical Task',
        'Monthly Conferences','Personal Advice']

    return (
        <div id='pricing' className=' pt-24'>
            <div>
                <div className='text-center flex flex-col justify-center'>
                    <h2 className='text-4xl text-amber-50 font-semibold'>Here Are All our Pricing</h2>
                    <p className='text-[#989895] px-4 pt-2'>The Pricing are well planed for you</p>
                    <div className='mt-5 mx-auto flex gap-4 items-center'>
                        <div className='text-amber-50 text-2xl font-semibold '>
                            <h2>Monthly</h2>
                        </div>
                        <div  onClick={()=>setIsYearly(!isYearly)} className=' h-6 w-16 bg-emerald-700 rounded-xl'>
                            <div id='toggle' className={isYearly?'h-6 w-7 rounded-3xl bg-amber-50 ml-auto':
                                'h-6 w-7 rounded-3xl bg-amber-50'}></div>
                        </div>
                        <div className='text-amber-50 text-2xl font-semibold'>
                            <h2>Yearly</h2>
                        </div>
                    </div>
                </div>
                <div className='container md:grid md:grid-cols-3 flex flex-col'>
                    {
                        packages.map((item,i)=>{
                            return(
                                <div key={i} className='rounded-md mt-5 bg-[#262626] md:mx-4 shadow-sm shadow-amber-50'>
                                    <div>
                                        <h2 className='text-center text-3xl font-semibold
                                     text-amber-50 mt-3'>{item['name']}</h2>
                                        <p className='text-center text-xs  w-4/5 mx-auto
                                     text-amber-50 mt-4'>The Package is suitable for all kind of customer </p>
                                        <p className='text-center mt-5'>
                                        <span className='font-semibold text-3xl text-amber-400 '>
                                            {isYearly ? item['yearlyPrice'] : item['monthlyPrice']}$</span>
                                            <span
                                                className='text-xs text-amber-400'>/{isYearly ? 'year' : 'month'}</span>
                                        </p>
                                    </div>
                                    <div className='my-4'>
                                        {
                                            packageFeature.map((item,i)=>{
                                                return (
                                                    <div key={i} className='flex gap-3 items-center py-1 ps-5'>
                                                        <div className='md:h-5 h-3 w-3 md:w-5 rounded-3xl bg-emerald-400'></div>
                                                        <div className='text-amber-50 md:text-xl text-sm'>{item}</div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                    <div className='flex justify-center mb-8'>
                                        <button className='btn btn-success text-amber-50'>Get Started</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Pricing;
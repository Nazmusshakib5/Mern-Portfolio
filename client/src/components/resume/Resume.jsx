import './Resume.css'
const Resume = () => {
    return (
        <section id='resume' className='CustomBgOne  pb-16'>
            <div className='pt-24'>
                <div className='text-center mb-16'><h2 className='text-4xl font-bold text-amber-50 uppercase'>Resume</h2></div>
                <div className='container flex md:grid grid-cols-2 flex-col gap-5'>
                    <div>
                        <h2 className='text-4xl text-amber-50 mb-6'>Education</h2>
                        <div className='flex flex-col gap-5'>
                            <div className='CustomBgFour shadow-sm shadow-lime-700 p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgThree px-4 py-2 rounded-xl'>2020-Present</span>
                                <h2 className='mt-4 text-3xl mb-2'>BSC in ICT</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>MBSTU</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            <div className='CustomBgFour shadow-sm shadow-lime-700 p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgThree px-4 py-2 rounded-xl'>2017-2019</span>
                                <h2 className='mt-4 text-3xl mb-2'>HSC in Science</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>Shahid Syed Nazrul College</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            {/*<div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>*/}
                            {/*    <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>*/}
                            {/*    <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>*/}
                            {/*    <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>*/}
                            {/*    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent*/}
                            {/*        possim iriure.</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-4xl text-amber-50 mb-6'>Courses</h2>
                        <div className='flex flex-col gap-5'>
                            <div className='CustomBgFour shadow-sm shadow-lime-700 p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgThree px-4 py-2 rounded-xl'>2023-2024</span>
                                <h2 className='mt-4 text-3xl mb-2'>Web Developing</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>Ostad Online Platform</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            <div className='CustomBgFour shadow-sm shadow-lime-700 p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgThree px-4 py-2 rounded-xl'>2023-present</span>
                                <h2 className='mt-4 text-3xl mb-2'>EDGE Program In ICT</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>MBSTU,ICT</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            {/*<div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>*/}
                            {/*    <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>*/}
                            {/*    <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>*/}
                            {/*    <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>*/}
                            {/*    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent*/}
                            {/*        possim iriure.</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className='mx-auto container py-10'>
                    <h2 className='text-4xl text-amber-50'>Skills</h2>
                    <div className='skillBar flex flex-col gap-5 py-5'>
                        <div>
                            <div className='text-amber-50 mb-2 flex justify-between'>
                                <div>HTML/CSS</div>
                                <div>90%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <div className='w-[90%] h-6 bg-emerald-700  rounded-r-md'></div>
                            </div>
                        </div>
                        <div>
                            <div className='text-amber-50 mb-2 flex justify-between'>
                                <div>JavaScript</div>
                                <div>80%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <div className='w-[80%] h-6 bg-emerald-700  rounded-r-md'></div>
                            </div>
                        </div>
                        <div>
                            <div className='text-amber-50 mb-2 flex justify-between'>
                                <div>Web Design</div>
                                <div>65%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <div className='w-[65%] h-6 bg-emerald-700  rounded-r-md'></div>
                            </div>
                        </div>
                        <div>
                            <div className='text-amber-50 mb-2 flex justify-between'>
                                <div>ReactJs</div>
                                <div>75%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <div className='w-[75%] h-6 bg-emerald-700  rounded-r-md'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
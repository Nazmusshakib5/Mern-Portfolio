import './Resume.css'
const Resume = () => {
    return (
        <section id='resume' className='mb-28 shadow-lg pb-28 shadow-emerald-950'>
            <div className='pt-24'>
                <div className='text-center mb-16'><h2 className='text-6xl font-bold text-amber-50'>Resume</h2></div>
                <div className='container flex md:grid grid-cols-2 flex-col gap-5'>
                    <div>
                        <h2 className='text-4xl text-amber-50 mb-6'>Education</h2>
                        <div className='flex flex-col gap-5'>
                            <div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>
                                <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>
                                <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            <div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>
                                <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>
                                <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            <div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>
                                <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>
                                <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-4xl text-amber-50 mb-6'>Experience</h2>
                        <div className='flex flex-col gap-5'>
                            <div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>
                                <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>
                                <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            <div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>
                                <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>
                                <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
                            <div className='cardBg p-6 text-amber-50 hover:bg-base-100 rounded-2xl'>
                                <span className='bg-emerald-700 px-4 py-2 rounded-xl'>2012-2017</span>
                                <h2 className='mt-4 text-3xl mb-2'>SSC in Science</h2>
                                <h4 className='text-xl text-emerald-600 mb-2'>Shahid Smrity High School</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </div>
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
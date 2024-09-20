import './Resume.css'
import {motion} from "framer-motion";

const Resume = () => {
    return (
        <section id='resume' className='CustomBgOne  pb-16 md:px-0 px-3'>
            <div className='pt-24'>
                <div className='text-center mb-16'><h2 className='text-4xl font-bold CustomTextOne uppercase'>Resume</h2></div>
                <div className='container flex md:grid grid-cols-2 flex-col gap-5'>
                    <div>
                        <h2 className='text-4xl CustomTextOne mb-6'>Education</h2>
                        <div className='flex flex-col gap-5'>
                            <motion.div
                                whileHover={{ scale: 1.05 }} // Scale up on hover
                                whileTap={{ scale: 0.9 }} // Scale down when clicked
                                transition={{ type: 'spring', stiffness: 300 }} // Smooth spring effect
                                className='CustomBgFour shadow-sm shadow-lime-700 p-6 CustomTextOne hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgSeven px-4 py-2 rounded-xl'>2020-Present</span>
                                <h2 className='mt-4 text-3xl mb-2'>BSC in ICT</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>MBSTU</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }} // Scale up on hover
                                whileTap={{ scale: 0.9 }} // Scale down when clicked
                                transition={{ type: 'spring', stiffness: 300 }} // Smooth spring effect
                                className='CustomBgFour shadow-sm shadow-lime-700 p-6 CustomTextOne hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgSeven px-4 py-2 rounded-xl'>2017-2019</span>
                                <h2 className='mt-4 text-3xl mb-2'>HSC in Science</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>Shahid Syed Nazrul College</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-4xl CustomTextOne mb-6'>Courses</h2>
                        <div className='flex flex-col gap-5'>
                            <motion.div
                                whileHover={{ scale: 1.05 }} // Scale up on hover
                                whileTap={{ scale: 0.9 }} // Scale down when clicked
                                transition={{ type: 'spring', stiffness: 300 }} // Smooth spring effect
                                className='CustomBgFour shadow-sm shadow-lime-700 p-6 CustomTextOne hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgSeven px-4 py-2 rounded-xl'>2023-2024</span>
                                <h2 className='mt-4 text-3xl mb-2'>Web Development</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>Ostad Online Platform</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }} // Scale up on hover
                                whileTap={{ scale: 0.9 }} // Scale down when clicked
                                transition={{ type: 'spring', stiffness: 300 }} // Smooth spring effect
                                className='CustomBgFour shadow-sm shadow-lime-700 p-6 CustomTextOne hover:bg-base-100 rounded-2xl'>
                                <span className='CustomBgSeven px-4 py-2 rounded-xl'>2023-present</span>
                                <h2 className='mt-4 text-3xl mb-2'>EDGE Program In ICT</h2>
                                <h4 className='text-xl CustomTextFour mb-2'>MBSTU,ICT</h4>
                                <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent
                                    possim iriure.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='mx-auto container py-10'>
                    <h2 className='text-4xl CustomTextOne'>Skills</h2>
                    <div className='skillBar flex flex-col gap-5 py-5'>
                        <div>
                            <div className='CustomTextOne mb-2 flex justify-between'>
                                <div>HTML/CSS</div>
                                <div>90%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <motion.div
                                    initial={{ width: '0%' }} // Start with 0% width
                                    whileInView={{ width: '90%' }} // Animate to 90% width when in view
                                    transition={{ duration: 1.5, ease: "easeInOut" }} // Customize duration and easing
                                    className=' h-6 CustomBgThree  rounded-r-md'></motion.div>
                            </div>
                        </div>
                        <div>
                            <div className='CustomTextOne mb-2 flex justify-between'>
                                <div>JavaScript</div>
                                <div>80%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <motion.div
                                    initial={{ width: '0%' }} // Start with 0% width
                                    whileInView={{ width: '80%' }} // Animate to 90% width when in view
                                    transition={{ duration: 1.5, ease: "easeInOut" }} // Customize duration and easing
                                    className=' h-6 CustomBgThree  rounded-r-md'></motion.div>
                            </div>
                        </div>
                        <div>
                            <div className='CustomTextOne mb-2 flex justify-between'>
                                <div>Web Design</div>
                                <div>65%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <motion.div
                                    initial={{ width: '0%' }} // Start with 0% width
                                    whileInView={{ width: '65%' }} // Animate to 90% width when in view
                                    transition={{ duration: 1.5, ease: "easeInOut" }} // Customize duration and easing
                                    className=' h-6 CustomBgThree  rounded-r-md'></motion.div>
                            </div>
                        </div>
                        <div>
                            <div className='CustomTextOne mb-2 flex justify-between'>
                                <div>ReactJs</div>
                                <div>75%</div>
                            </div>
                            <div className='w-[100%] bg-emerald-950 h-6 rounded-r-md'>
                                <motion.div
                                    initial={{ width: '0%' }} // Start with 0% width
                                    whileInView={{ width: '75%' }} // Animate to 90% width when in view
                                    transition={{ duration: 1.5, ease: "easeInOut" }} // Customize duration and easing
                                    className=' h-6 CustomBgThree  rounded-r-md'></motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
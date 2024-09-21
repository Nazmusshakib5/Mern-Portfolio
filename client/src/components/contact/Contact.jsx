import './Contact.css'
import {HiMailOpen} from "react-icons/hi";
import {IoCallSharp} from "react-icons/io5";
import {TiSocialFacebook, TiSocialLinkedin} from "react-icons/ti";
import {FaGithub} from "react-icons/fa";
import {IoIosSend} from "react-icons/io";
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import {motion} from "framer-motion";
import {FadeIn} from "../../variant.js";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if(e.target[0].value==='' || e.target[1].value==='' || e.target[2].value===''){
            toast.error('Need Valid Name Or Email')
            return
        }
        else if(!/\S+@\S+\.\S+/.test(e.target[1].value)){
            toast.error('Need Valid Email')
            return
        }

        emailjs
            .sendForm('service_xdl4pjw', 'template_jvzajdn', form.current, {
                publicKey: 'dSO54DSgxjonOX15H',
            })
            .then(
                (data) => {
                    data['status']===200?toast.success('Email Sent Successfully'):toast.error('Email is not Sent')
                    form.current.reset();
                },
                (error) => {
                    toast.error('Email is not Sent')
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className='CustomBgFour pb-20'>
            <Toaster position='bottom-center'/>
            <div id='contact' className='pt-24 CustomBgFour pb-16 md:w-5/6 md:mx-auto'>
                <h2 className='text-center text-4xl uppercase CustomTextOne font-bold mb-5'>Get in
                    <span className='text-amber-400'>{' '}touch</span></h2>
                <div className='md:px-[5rem] px-[2rem] grid md:grid-cols-5 grid-cols-1 mx-auto'>
                    <motion.div
                        variants={FadeIn('up',0.2)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{once:false,amount:0.7}}
                        className='w-full col-span-2 '>
                        <h2 className='uppercase text-3xl font-semibold CustomTextOne'>Don't be Shy!</h2>
                        <p className='CustomTextOne mt-3 pe-2 md:pe-12'>Feel free to get in touch with me. I am always
                            open
                            to discussing new projects,
                            creative ideas or opportunities to be part of your visions.</p>
                        <div>
                            <div className='flex items-center CustomTextOne mt-6'>
                                <div className='p-2 bg-emerald-700 rounded-xl'><span
                                    className='text-3xl'><HiMailOpen/></span></div>
                                <div className='leading-5 md:ms-5 ms-3'>
                                    <p>Mail Me</p>
                                    <p>nmshakib5@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center CustomTextOne mt-6'>
                                <div className='p-2 bg-emerald-700 rounded-xl'><span
                                    className='text-3xl'><IoCallSharp/></span></div>
                                <div className='leading-5 md:ms-5 ms-3'>
                                    <p className=''>Call</p>
                                    <p className=''>+8801790779953</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 md:gap-4 CustomTextOne mt-6'>
                            <a href='https://www.facebook.com/nm.shakib.5' target='_blank'
                               className='p-2 bg-[#303030] hover:bg-[#444444] rounded-3xl'><span
                                className='text-2xl'><TiSocialFacebook/></span></a>
                            <a href='http://www.linkedin.com' target='_blank'
                               className='p-2 bg-[#303030] rounded-3xl hover:bg-[#444444]'><span
                                className='text-2xl'><TiSocialLinkedin/></span></a>
                            <a href='https://github.com/Nazmusshakib5' target='_blank'
                               className='p-2 bg-[#303030] rounded-3xl hover:bg-[#444444]'><span
                                className='text-2xl'><FaGithub/></span></a>
                        </div>
                    </motion.div>
                    <motion.form
                        variants={FadeIn('left',0.2)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{once:false,amount:0.7}}
                        ref={form} onSubmit={sendEmail}
                        className='w-full col-span-3 md:grid grid-cols-12 md:gap-5
                        flex flex-col gap-3 CustomTextOne mt-6 md:mt-0'>
                        <div className='col-span-6'>
                            <label className="input  input-bordered flex items-center gap-2 rounded-3xl">
                                <input type="text" name='user_name' className="grow" placeholder="NAME"/>
                            </label>
                        </div>
                        <div className='col-span-6'>
                            <label className="input input-bordered flex items-center gap-2 rounded-3xl">
                                <input type="text" name='user_email' className="grow" placeholder="EMAIL"/>
                            </label>
                        </div>
                        {/*<div className='col-span-4'>*/}
                        {/*    <label className="input input-bordered flex items-center gap-2 rounded-3xl">*/}
                        {/*        <input type="text" className="grow" name='user_subject' placeholder="SUBJECT"/>*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                        <textarea className="textarea textarea-bordered  col-span-12 md:h-40
                    h-24
                    rounded-3xl" name='message' placeholder="YOUR MESSAGE"></textarea>
                        <div className='col-span-7 lg:col-span-5'>
                            <button type='submit' className='btnBorder bg-[#1d232a] w-full rounded-3xl  hover-animate hoverBtn'>
                                <div className='me-5 py-2 uppercase md:text-md CustomTextOne'>Send message</div>
                                <div className='w-12 rounded-3xl h-full bg-emerald-700 absolute top-0 right-0
                            flex justify-center items-center'>
                                    <IoIosSend className='text-3xl'/>
                                </div>
                            </button>
                        </div>

                    </motion.form>

                </div>
            </div>
        </div>

    );
};

export default Contact;
import './Contact.css'
import {HiMailOpen} from "react-icons/hi";
import {IoCallSharp} from "react-icons/io5";
import {TiSocialFacebook, TiSocialLinkedin} from "react-icons/ti";
import {FaGithub} from "react-icons/fa";
import {IoIosSend} from "react-icons/io";

const Contact = () => {
    return (
        <section id='contact' className='pt-24  pb-16'>
            <h2 className='text-center text-4xl uppercase text-amber-50 font-bold mb-5'>Get in
                <span className='text-amber-400'>touch</span></h2>
            <div className='md:px-[5rem] px-[2rem] grid md:grid-cols-5 grid-cols-1 mx-auto'>
                <div className='w-full col-span-2 '>
                    <h2 className='uppercase text-3xl font-semibold text-amber-50'>Don't be Shy!</h2>
                    <p className='text-amber-50 mt-3 pe-2 md:pe-12'>Feel free to get in touch with me. I am always open
                        to discussing new projects,
                        creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center text-amber-50 mt-6'>
                            <div className='p-2 bg-emerald-700 rounded-xl'><span
                                className='text-3xl'><HiMailOpen/></span></div>
                            <div className='leading-5 md:ms-5 ms-3'>
                                <p>Mail Me</p>
                                <p>nmshakib5@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center text-amber-50 mt-6'>
                            <div className='p-2 bg-emerald-700 rounded-xl'><span
                                className='text-3xl'><IoCallSharp/></span></div>
                            <div className='leading-5 md:ms-5 ms-3'>
                                <p className=''>Call</p>
                                <p className=''>+8801790779953</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 md:gap-4 text-amber-50 mt-6'>
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
                </div>
                <div
                    className='w-full col-span-3 md:grid grid-cols-3 md:gap-5 flex flex-col gap-3 text-amber-50 mt-6 md:mt-0'>
                    <div>
                        <label className="input  input-bordered flex items-center gap-2 rounded-3xl ">
                            <input type="text" className="grow" placeholder="YOUR NAME"/>
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 rounded-3xl">
                            <input type="text" className="grow" placeholder="YOUR EMAIL"/>
                        </label>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 rounded-3xl">
                            <input type="text" className="grow" placeholder="YOUR SUBJECT"/>
                        </label>
                    </div>
                    <textarea className="textarea textarea-bordered  col-span-3 md:h-40
                    h-24
                    rounded-3xl" placeholder="YOUR MESSAGE"></textarea>
                    <div>
                        <div className='border rounded-3xl  border-green-700 hover-animate hoverBtn'>
                            <p className=' ms-8 py-2 uppercase md:text-md text-amber-50'>Send message</p>
                            <div className='w-12 rounded-3xl h-full bg-emerald-700 absolute top-0 right-0
                            flex justify-center items-center'>
                                <IoIosSend className='text-3xl'/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
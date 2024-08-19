import './Contact.css'
const Contact = () => {
    return (
        <section id='contact' className='pt-24 mt-28 section'>
            <h2 className='text-center text-4xl uppercase text-amber-50 font-bold mb-5'>Get in
                <span className='text-amber-400'>touch</span></h2>
            <div className='px-36 grid md:grid-cols-5 grid-cols-1 mx-auto'>
                <div className='w-full col-span-2 '>
                    <h2 className='uppercase text-3xl font-semibold text-amber-50'>Don't be Shy!</h2>
                    <p className='text-amber-50 mt-3 pe-2'>Feel free to get in touch with me. I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.</p>
                    <div>
                        <div className='flex items-center text-amber-50'>
                            <div>ICON</div>
                            <div>
                                <p>Mail Me</p>
                                <p>nmshakib5@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center text-amber-50'>
                            <div>ICON</div>
                            <div>
                                <p>Mail Me</p>
                                <p>nmshakib5@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-emerald-500 col-span-3 grid grid-cols-3 gap-5 text-amber-50'>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 rounded-3xl">
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
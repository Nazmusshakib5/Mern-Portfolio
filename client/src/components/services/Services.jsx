import './Services.css'
const Services = () => {
    return (
        <section id='services' className='mt-20 shadow-lg pb-20 shadow-emerald-950'>
            <div className='w-full h-[100px]'></div>
            <div><h1 className='text-white text-center text-5xl mb-20 font-bold'>My Quality Services</h1></div>
            <div className='container flex flex-col gap-5'>
                <div className="collapse collapse-arrow bg-emerald-950 text-amber-50 rounded shadow-sm shadow-amber-300">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">Branding Design</div>
                    <div className="collapse-content bg-emerald-900">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-emerald-950 text-amber-50 rounded shadow-sm shadow-amber-300">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">UI/UX Design</div>
                    <div className="collapse-content bg-emerald-900">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-emerald-950 text-amber-50 rounded shadow-sm shadow-amber-300">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">Web Design</div>
                    <div className="collapse-content bg-emerald-900">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-emerald-950 text-amber-50 rounded shadow-sm shadow-amber-300">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">App Design</div>
                    <div className="collapse-content bg-emerald-900">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
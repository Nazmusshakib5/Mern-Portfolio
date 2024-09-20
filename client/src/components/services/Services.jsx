import './Services.css'
import {motion} from "framer-motion";
import {containerVariants,childVariants} from "../../variant.js";
import PersonalSkills from "./PersonalSkills.jsx";
const Services = () => {
    return (
        <section id='services' className=' CustomBgOne pb-20 md:px-0 px-3'>
            <div className='w-full h-[100px]'></div>
            <div><h1 className='CustomTextOne text-center text-4xl mb-20 font-bold uppercase'>My Quality Services</h1></div>
            <div className='mb-20'><PersonalSkills/></div>
            <motion.div
                variants={containerVariants} // Apply parent animation rules
                initial="hidden"
                whileInView={'show'}
                className='container flex flex-col gap-5'>
                <motion.div
                    variants={childVariants} // Apply child animation rules
                    className="collapse collapse-arrow  CustomTextOne rounded shadow-sm shadow-[#809A6F]">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">Branding Design</div>
                    <div className="collapse-content CustomBgOne">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={childVariants}
                    className="collapse collapse-arrow  CustomTextOne rounded shadow-sm shadow-[#809A6F]">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">UI/UX Design</div>
                    <div className="collapse-content CustomBgOne">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={childVariants}
                    className="collapse collapse-arrow  CustomTextOne rounded shadow-sm shadow-[#809A6F]">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">Web Design</div>
                    <div className="collapse-content CustomBgOne">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={childVariants}
                    className="collapse collapse-arrow  CustomTextOne rounded shadow-sm shadow-[#809A6F]">
                    <input type="checkbox"/>
                    <div className="collapse-title text-xl font-medium shadow-sm shadow-amber-50">App Design</div>
                    <div className="collapse-content CustomBgOne">
                        <p className='mt-5 ServiceDesc'>Design your portfolio with a clean, minimalist layout that
                            highlights your
                            work.
                            Maintain consistency in colors, typography, and logo to create a cohesive brand experience,
                            while adding personal touches like custom icons or subtle animations to reflect your unique
                            style.</p>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Services;
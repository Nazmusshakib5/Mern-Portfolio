import { motion } from "framer-motion";
import {FadeIn} from "../../variant.js";

const skills = ["React", "HTML", "CSS", "JavaScript", "Node.js", "MongoDB",
    "Framer Motion", "TypeScript", "Express.js"];

const PersonalSkills = () => {
    return (
        <motion.div
            variants={FadeIn('right',0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            style={{
                height: '300px',
                border: '2px solid #222222',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexWrap:'wrap',
                margin:'0 auto',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                background:'linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))',
            }}
            className='md:w-3/5 w-full md:p-0 p-2'
        >
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    drag
                    dragConstraints={{
                        left: -300,
                        right: 300,
                        top: -100,
                        bottom: 100,
                    }}
                    dragElastic={0.5} // Add elasticity to the dragging motion
                    whileHover={{scale: 1.1}} // Hover effect
                    whileTap={{scale: 0.9}} // Click effect
                    style={{
                        padding: '10px 20px',
                        background: 'linear-gradient(135deg, #2f5435, #809A6F)',
                        color: '#fff',
                        borderRadius: '20px',
                        cursor: 'grab',
                        margin: '10px',
                        display: 'inline-block',
                    }}
                >
                    {skill}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default PersonalSkills;
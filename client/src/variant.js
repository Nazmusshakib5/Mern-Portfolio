export const  FadeIn=(direction,delay)=>{
    return{
        hidden:{
            y:direction==='up'?40:direction==='down'?-40:0,
            x:direction==='left'?40:direction==='right'?-40:0
        },
        show:{
            x:0,
            y:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }
    }
}


// -------------------------------------------------------------------------------
//child div reveal one by one
export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4, // Delay between each child animation
        },
    },
};

export const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Start off-screen and invisible
    show: { opacity: 1, y: 0}, // Animate into view
};

// -------------------------------------------------------------------------------

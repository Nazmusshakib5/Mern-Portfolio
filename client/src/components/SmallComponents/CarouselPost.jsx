import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const CarouselPost = () => {
    const imageArr = [
        {
            img: 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?w=500&auto=format&fit=crop&q=60&ixlib=' +
                'rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8fDA%3D',
            name:'John',
            comment:'"Great use of the MERN stack! The UI is clean and responsive."',
            rating:4.5
        },
        {
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?' +
                'w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
            name:'Sarah',
            comment:'"Love the smooth user experience. The design is super intuitive!"',
            rating:4.7
        },
        {
            img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib' +
                '=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
            name:'Mike',
            comment:'"Solid full-stack work! The backend and frontend integration is seamless."',
            rating:5
        },
        {
            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=' +
                'rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
            name:'Emily',
            comment:'"Impressive portfolio! Your MERN skills are definitely in demand."',
            rating:4.2
        },
        {
            img: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=' +
                'rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
            name:'Carlos',
            comment:'"Awesome work! Your React components are really well-organized."',
            rating:4
        },
        {
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=' +
                'rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8fDA%3D',
            name:'Anna',
            comment:'"Nice job! You’ve clearly demonstrated strong MERN stack knowledge."',
            rating:5
        },
        {
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=' +
                'rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D',
            name:'Robin',
            comment:'"Efficient database handling! The MongoDB integration is smooth."',
            rating:4.5
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=' +
                'rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
            name:'Sam',
            comment:'"This portfolio shows great potential for scalable projects. Well done!"',
            rating:5
        }
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 1024},
            items: 2
        },
        desktop: {
            breakpoint: {max: 1024, min: 860},
            items: 2
        },
        tablet: {
            breakpoint: {max: 860, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <div className='container pb-28'>
            <h2 className='text-center text-4xl CustomTextOne py-28 font-semibold uppercase'>Customer Feedback</h2>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
            >
                {imageArr.map((item, i) => {
                    return (
                        <div key={i} className="card bg-base-100 shadow-xl md:me-8">
                            <div className="avatar p-3 flex gap-8 items-center text-xl CustomTextOne">
                                <div
                                    className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                    <img
                                        src={item['img']}/>
                                </div>
                                <div><p className='pt-3'>{item['name']}</p></div>
                            </div>
                            <div className="card-body">
                                <div className="card-actions ">
                                    <p className='CustomTextOne px-16'>{item['comment']}</p>
                                    <div className='px-16'>
                                        <StarRatings rating={item['rating']} starRatedColor="#787878"
                                                     starDimension="20px"
                                                     starSpacing="4px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
};

export default CarouselPost;

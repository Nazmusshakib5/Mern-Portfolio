import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const CarouselPost = () => {
    const imageArr = [{img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {img: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp'},
        {img: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'},
        {img: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp'},
        {img: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp'},
        {img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp'},
        {img: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'}
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
                autoPlaySpeed={3000}
            >
                {imageArr.map((item, i) => {
                    return (
                        <div key={i} className="card bg-base-100 shadow-xl md:me-8">
                            <div className="avatar p-3 flex gap-8 items-center text-xl CustomTextOne">
                                <div
                                    className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                </div>
                                <div><p className='pt-3'>Name</p></div>
                            </div>
                            <div className="card-body">
                                <div className="card-actions ">
                                    <p className='CustomTextOne px-16'>I had a fantastic experience with your service. The team was responsive, and the
                                        product exceeded my expectations!</p>
                                    <div className='px-16'>
                                        <StarRatings rating={5} starRatedColor="#787878"
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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselPost = () => {
    const imageArr=[{img:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {img:'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600'},
        {img:'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp'},
        {img:'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp'}
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 1024, min: 860 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 860, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <div className='container'>
            <h2 className='text-center text-4xl text-amber-50 py-28 font-semibold'>Testimonial</h2>
            <Carousel responsive={responsive}>
                {imageArr.map((item,i)=>{
                    return (
                        <div key={i} className="card bg-base-100 shadow-xl me-3">
                            <figure>
                                <img
                                    className='md:h-[300px] h-[150px] w-full'
                                    src={item['img']}
                                    alt="Shoes"/>
                            </figure>
                            <div className="card-body">
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary">Read More !</button>
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

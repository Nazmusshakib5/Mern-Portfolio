import Navbar from "../Navbar/Navbar.jsx";
import Home from "../home/Home.jsx";
import About from "../about/About.jsx";
import Blog from "../blog/Blog.jsx";
import Contact from "../contact/Contact.jsx";
import MyWork from "../Myworks/MyWork.jsx";
import Pricing from "../pricing/Pricing.jsx";
import Resume from "../resume/Resume.jsx";
import Services from "../services/Services.jsx";
import Testimonial from "../testimonial/Testimonial.jsx";
import CounterUpDetails from "../Counter Up/CounterUpDetails.jsx";
import Carousel from "../SmallComponents/Carousel.jsx";

const MasterLayout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Carousel/>
            <Services/>
            <CounterUpDetails/>
            <Resume/>
            <MyWork/>
            <Blog/>
            <Pricing/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default MasterLayout;
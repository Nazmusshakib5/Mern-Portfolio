import Navbar from "../Navbar/Navbar.jsx";
import Home from "../home/Home.jsx";
import About from "../about/About.jsx";
import Blog from "../blog/Blog.jsx";
import Contact from "../contact/Contact.jsx";
// import Portfolio from "../portfolio/Portfolio.jsx";
// import Pricing from "../pricing/Pricing.jsx";
// import Resume from "../resume/Resume.jsx";
import Services from "../services/Services.jsx";
import Testimonial from "../testimonial/Testimonial.jsx";

const MasterLayout = () => {
    return (
        <div>
                <Navbar/>
                <Home/>
                <About/>
                <Services/>
                <Blog/>
                <Contact/>
                {/*<Portfolio/>*/}
                {/*<Pricing/>*/}
                {/*<Resume/>*/}
                <Testimonial/>
        </div>
    );
};

export default MasterLayout;
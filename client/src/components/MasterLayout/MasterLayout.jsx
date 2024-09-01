import Navbar from "../Navbar/Navbar.jsx";
import Home from "../home/Home.jsx";
import About from "../about/About.jsx";
import Blog from "../blog/Blog.jsx";
import Contact from "../contact/Contact.jsx";
import Resume from "../resume/Resume.jsx";
import Services from "../services/Services.jsx";
import Testimonial from "../testimonial/Testimonial.jsx";
import CounterUpDetails from "../Counter Up/CounterUpDetails.jsx";

const MasterLayout = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Services/>
            <CounterUpDetails/>
            <Resume/>
            <Blog/>
            {/*<Pricing/>*/}
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default MasterLayout;
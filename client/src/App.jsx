import './App.css'

import About from './components/about/About.jsx'
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/home/Home.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Resume from "./components/resume/Resume.jsx";
import Services from "./components/services/Services.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";

function App() {
  return (
    <>
        <Sidebar/>
        <main className='main'>
            <About/>
            <Blog/>
            <Contact/>
            <Home/>
            <Portfolio/>
            <Pricing/>
            <Resume/>
            <Services/>
            <Testimonial/>
        </main>
    </>
  )
}

export default App

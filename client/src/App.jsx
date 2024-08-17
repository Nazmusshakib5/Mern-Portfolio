import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout.jsx";
import DashboardPage from "./components/DashboardPage/DashboardPage.jsx";
import LoginPage from "./components/Login Page/LoginPage.jsx";

// import About from './components/about/About.jsx'
// import Blog from "./components/blog/Blog.jsx";
// import Contact from "./components/contact/Contact.jsx";
// import Home from "./components/home/Home.jsx";
// import MyWork from "./components/Myworks/MyWork.jsx";
// import Pricing from "./components/pricing/Pricing.jsx";
// import Resume from "./components/resume/Resume.jsx";
// import Services from "./components/services/Services.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Testimonial from "./components/testimonial/Testimonial.jsx";

function App() {
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<MasterLayout/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

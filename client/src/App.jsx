import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout.jsx";
import BlogPage from "./components/DashboardPage/BlogPage.jsx";
import DashBoardHomePage from "./components/DashboardPage/DashBoardHomePage.jsx";
import LoginPage from "./components/DashboardPage/LoginPage.jsx";
import UpdateBlog from "./components/DashboardPage/UpdateBlog.jsx";


function App() {
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<MasterLayout/>}/>
                <Route path='/dashboard' element={<DashBoardHomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/dashboard/blog' element={<BlogPage/>}/>
                <Route path='/dashboard/update/:ID' element={<UpdateBlog/>}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

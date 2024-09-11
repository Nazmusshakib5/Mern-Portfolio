import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout.jsx";
import BlogPage from "./components/DashboardPage/BlogPage.jsx";
import LoginPage from "./components/DashboardPage/LoginPage.jsx";
import UpdateBlog from "./components/DashboardPage/UpdateBlog.jsx";
import DashboardLandingPage from "./components/DashboardPage/DashboardLandingPage.jsx";
import DashBoardHomePage from "./components/DashboardPage/DashBoardHomePage.jsx";
import BlogDetailsPage from "./components/blog/BlogDetailsPage.jsx";
import DashBoardProjectUpdatePage from "./components/DashboardPage/DashBoardProjectUpdatePage.jsx";


function App() {
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<MasterLayout/>}/>
                <Route path='/blogDetails/:ID' element={<BlogDetailsPage/>}/>
                <Route path='/dashboard' element={<DashboardLandingPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/dashboard/createblog' element={<BlogPage/>}/>
                <Route path='/dashboard/updateProject/:ID' element={<DashBoardProjectUpdatePage/>}/>
                <Route path='/dashboard/blogs' element={<DashBoardHomePage/>}/>
                <Route path='/dashboard/update/:ID' element={<UpdateBlog/>}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

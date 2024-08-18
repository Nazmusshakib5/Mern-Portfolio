import './MyWork.css'
import {useState} from "react";
import Pagination from "../SmallComponents/Pagination.jsx";
const MyWork = () => {
    const arr=['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th']
    //fetch data ,create a useState for data,use it in useEffect in IIF
    const [currentPage,setCurrentPage]=useState(1)
    const [postperPage,setPostperPage]=useState(3)
    let lastItemOfPage=currentPage*postperPage
    let firstItemOfPage=lastItemOfPage-postperPage
    let CurrentPageData=arr.slice(firstItemOfPage,lastItemOfPage)

    return (
        <section className='container mx-auto'>
            <div className='text-center mb-10'><h2 className='text-4xl font-semibold text-amber-50'>My Works</h2></div>
            <div className='md:grid grid-cols-3 flex flex-col w-full gap-5'>
                {
                    CurrentPageData.map((item,i)=>{
                        return (
                            <div key={i} className="card bg-emerald-950 shadow-xl">
                                <div className="card-body text-amber-50">
                                    <h2 className="card-title">{item}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <Pagination postPerPage={postperPage}
                        totalPost={arr.length}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
            />
        </section>

    );
};

export default MyWork;
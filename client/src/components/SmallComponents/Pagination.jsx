import './Pagination.css'

const Pagination = ({totalPost, postPerPage, setCurrentPage,currentPage}) => {
    const TotalPostArray = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        TotalPostArray.push(i)
    }
    return (
        <div className='container'>
            <div className='flex gap-2 mt-20 justify-center items-start'>
                {/*<button className='bg-white text-black  px-2 py-1 rounded-sm font-semibold  mt-1'>Prev</button>*/}
                {
                    TotalPostArray.map((page, i) => {
                        return <button onClick={() => setCurrentPage(page)}
                                       className={currentPage === page ?
                                           'bg-white text-black font-semibold px-3 py-1 rounded-sm  activePagePagination' :
                                           'CustomBgOne text-white  px-3 py-1 rounded-sm PageBtn '}
                                       key={i}>{page}</button>
                    })
                }
                {/*<button className='bg-white text-black  px-2 py-1 rounded-sm font-semibold  mt-1'>Next</button>*/}
            </div>
        </div>
    );
};

export default Pagination;
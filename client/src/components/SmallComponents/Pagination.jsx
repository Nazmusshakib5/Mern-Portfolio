const Pagination = ({totalPost, postPerPage, setCurrentPage,currentPage}) => {
    const TotalPostArray = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        TotalPostArray.push(i)
    }
    return (
        <div className='container'>
            <div className='flex gap-2 mt-20 justify-center'>
                {/*<button className='bg-white text-black  px-2 py-1 rounded-sm font-semibold  mt-1'>Prev</button>*/}
                {
                    TotalPostArray.map((page, i) => {
                        return <button onClick={() => setCurrentPage(page)}
                                       className={currentPage === page ?
                                           'CustomBgOne text-white font-semibold px-3 py-1 rounded-sm activePagePagination' :
                                           'bg-white text-black  px-3 py-1 rounded-sm  mt-1'}
                                       key={i}>{page}</button>
                    })
                }
                {/*<button className='bg-white text-black  px-2 py-1 rounded-sm font-semibold  mt-1'>Next</button>*/}
            </div>
        </div>
    );
};

export default Pagination;
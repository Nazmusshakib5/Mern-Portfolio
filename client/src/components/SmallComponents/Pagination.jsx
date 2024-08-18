const Pagination = ({totalPost, postPerPage, setCurrentPage,currentPage}) => {
    const TotalPostArray = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        TotalPostArray.push(i)
    }
    return (
        <div className='container'>
            <div className='flex gap-5 mt-20 justify-center'>
                {
                    TotalPostArray.map((page, i) => {
                        return <button onClick={() => setCurrentPage(page)}
                        className={currentPage===page ?'bg-emerald-700 text-amber-50  btn-circle activePagePagination':
                            'bg-emerald-700 text-amber-50  btn-circle'}
                                       key={i}>{page}</button>
                    })
                }
            </div>
        </div>
    );
};

export default Pagination;
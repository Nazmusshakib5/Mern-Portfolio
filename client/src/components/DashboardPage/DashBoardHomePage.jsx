import DashboardPage from "./DashboardPage.jsx";


const DashBoardHomePage = () => {

    const BlogData = [{
        title: '1st Blog wwwwwwwwwwdgdfd', img: 'wwwwwwwwwwdgdfd', desc: 'mmmoooooodddddddddddddddddddgfgggggggggg'
    }, {
        title: '2nd Blog yrureufhdbvnsdvb', img: 'yrureufhdbvnsdvb', desc: 'qoiwodnasmcbhddddddddddddgfgggggggggg'
    }, {title: '3rd Blog qoiwodnasmcbh', img: 'qoiwodnasmcbh', desc: 'gdfddddddyrureufhdbvnsdvbgggggggggg'}]

    return (<DashboardPage>
        <div>
            <div className="container">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th className='w-72'>BlogTitle</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {BlogData.map((item, i) => {
                        return (<tr key={i}>
                            <th>{i + 1}</th>
                            <td>{item['title']}</td>
                            <td>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600
                                        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300
                                 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80
                                         font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit
                                </button>
                            </td>
                            <td>
                                <button type="button"
                                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600
                                                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300
                                                 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg
                                                    dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5
                                                     text-center me-2 mb-2">Delete
                                </button>
                            </td>
                        </tr>)
                    })}

                    </tbody>
                </table>
            </div>
        </div>
    </DashboardPage>);
};

export default DashBoardHomePage;
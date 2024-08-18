import './About.css'

const About = () => {
    const projectData=[{img:'img-1',title:'title-1'},{img:'img-2',title:'title-2'}
    ,{img:'img-3',title:'title-3'},{img:'img-4',title:'title-4'},{img:'img-5',title:'title-5'}]
    return (
        <div id='projects' className='aboutSection w-full mt-14 shadow-lg pb-20 shadow-emerald-950'>
            <div className='w-full h-[100px]'></div>
            <div><h1 className='text-white text-center text-5xl mb-14 font-bold'>New Projects</h1></div>
            <div className='container md:grid grid-cols-3 gap-10 flex flex-col'>
                {
                    projectData.map((item,i)=>{
                        return (<div key={i} className="card cardBg text-white shadow-sm shadow-cyan-600 hover:bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">title will change</h2>
                                <p>{item['img']}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => document.getElementById(`myModal${i}`).showModal()}
                                            className="bg-emerald-700 px-8 py-2 rounded-xl">Open
                                    </button>
                                </div>
                            </div>
                        </div>)
                    })
                }
                {
                    projectData.map((item,i)=>{
                        return (
                            <dialog key={i} id={`myModal${i}`} className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg text-amber-50">{item['title']}</h3>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default About;


import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import DashboardPage from "./DashboardPage.jsx";

const CreateProjectPage = () => {

    const navigate=useNavigate()
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [projectType, setProjectType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ title, imageUrl, description });
    };

    const HandleBlogPost=async (title,imageUrl,description,projectType)=>{
        let data=await axios.post('/api/v1/createProject',{projectTitle:title,projectImage:imageUrl,
            projectType:projectType,projectDetails:description})
        if(data['data']['status']==='success'){
            navigate('/dashboard')
        }
    }

    return (
        <DashboardPage>
            <div className="min-h-[90vh] flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Create A Project</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Blog Title */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Project Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter project title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                            text-gray-700 bg-gray-100 focus:border-emerald-950"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                                Project Type
                            </label>
                            <input
                                type="text"
                                id="type"
                                placeholder="Enter project type"
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                            text-gray-700 bg-gray-100 focus:border-emerald-950"
                            />
                        </div>
                        {/* Image URL */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image-url">
                                Image URL
                            </label>
                            <input
                                type="text"
                                id="image-url"
                                placeholder="Enter image URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                            text-gray-700 bg-gray-100 focus:border-emerald-950"
                            />
                        </div>
                        {/* Description */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                id="description"
                                placeholder="Write your project description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none
                             text-gray-700 bg-gray-100 focus:border-emerald-950 h-32"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => HandleBlogPost(title, imageUrl, description,projectType)}
                                type="submit"
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg
                             focus:outline-none focus:shadow-outline w-full"
                            >
                                Post Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardPage>
    );
};

export default CreateProjectPage;
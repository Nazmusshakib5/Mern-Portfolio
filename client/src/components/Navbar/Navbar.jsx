import './Navbar.css'
import avatar1 from '../../assets/avatar-1.svg'
const Navbar = () => {
    return (
        <div>
            <nav className="NavBody px-4 py-7 w-full top-0 z-10 fixed">
                <div className=" mx-auto flex justify-between items-center">
                    {/* Left Icon */}
                    <div className="text-white flex">
                        <a href="#" className="flex items-center">
                            <img
                                src={avatar1}
                                alt="Logo"
                                className="h-8 w-8 mr-2"
                            />
                        </a>
                        <p>Mojo</p>
                    </div>

                    {/* Middle Links */}
                    <div className="hidden md:flex space-x-4 text-white md:mr-20 md:gap-10 gap-3">
                        <a href="#" className="hover:text-gray-400">
                            Home
                        </a>
                        <a href="#about" className="hover:text-gray-400">
                            About Me
                        </a>
                        <a href="#price" className="hover:text-gray-400">
                            Price
                        </a>  <a href="#" className="hover:text-gray-400">
                            Home
                        </a>
                        <a href="#about" className="hover:text-gray-400">
                            About Me
                        </a>
                        <a href="#price" className="hover:text-gray-400">
                            Price
                        </a>
                    </div>

                    {/* Right Collapsible Button */}
                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none"
                            aria-label="Toggle Menu"
                            onClick={() => {
                                const menu = document.getElementById('mobile-menu');
                                menu.classList.toggle('hidden');
                            }}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden hidden" id="mobile-menu">
                    <a href="#" className="block px-4 py-2 text-white">
                        Home
                    </a>
                    <a href="#about" className="block px-4 py-2 text-white">
                        About Me
                    </a>
                    <a href="#price" className="block px-4 py-2 text-white">
                        Price
                    </a>
                 <a href="#" className="block px-4 py-2 text-white">
                Home
                </a>
                <a href="#about" className="block px-4 py-2 text-white">
                    About Me
                </a>
                <a href="#price" className="block px-4 py-2 text-white">
                    Price
                </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
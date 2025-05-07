const Navbar = () => {  
    return (
        <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0d0d0d] via-[#2c003e] to-[#120022] mx-30 pt-10">
            <div className="text-white text-3xl font-bold">My Portfolio</div>
            <ul className="flex space-x-4 text-lg font-medium">
                <li><a href="#about" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="#projects" className="text-white hover:text-gray-300">About</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-300">Resume</a></li>
                <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
                <li><a href="#project" className="text-white hover:text-gray-300">Project</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;  
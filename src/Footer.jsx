import { FaGithub, FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rgb(16, 25, 46) text-white py-4 text-center shadow-lg w-full">
      <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center">Chatbot</h1>
        <div className="flex justify-center space-x-4 mb-3">
          <a
            href="https://github.com/asharammeena123"
            className="text-blue-400 hover:text-white transform hover:scale-110 transition duration-300 flex items-center"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
          {/* <span className="text-gray-500">|</span> */}
          {/* <a
            href="https://ai.google.dev/competition/projects/helpmate-ai"
            className="text-blue-400 hover:text-white transform hover:scale-110 transition duration-300 flex items-center"
          >
            <FaRocket className="mr-1" /> Vote Now
          </a> */}
        </div>
        {/* <p className="text-xs text-gray-500">&copy; 2025 Chatbot. All rights reserved.</p> */}
      </div>
    </footer>
  );
};

export default Footer;
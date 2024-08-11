import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col items-center justify-between py-6 lg:flex-row lg:items-center lg:justify-between">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-thin tracking-tight sm:text-4xl lg:text-6xl"
      ></motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="mt-4 flex items-center justify-center gap-4 text-2xl sm:gap-8 sm:text-4xl lg:mt-0"
      >
        <a
          href="https://www.linkedin.com/in/adityaazizi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/adityaazizi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/adityaazizi25/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;

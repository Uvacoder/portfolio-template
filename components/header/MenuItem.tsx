import { motion } from "framer-motion";
import * as React from "react";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: React.FC = () => {
  return (
    <motion.ul
      className="list-none flex-col mb-5 flex pl-10 bg-bgblue min-h-screen mt-0 -mr-10 space-y-5 z-50 backdrop-blur-md"
      variants={variants}
    >
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="text-neongreen">1. </span> About
        </Link>
      </li>
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="text-neongreen">2. </span>Skills
        </Link>
      </li>
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="text-neongreen">3. </span>Work
        </Link>
      </li>
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <Link
          activeClass="active"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="text-neongreen">4. </span>Testimonials
        </Link>
      </li>{" "}
      <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span className="text-neongreen">5. </span>Contact
        </Link>{" "}
      </li>
    </motion.ul>
  );
};

export default MenuItem;

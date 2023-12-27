import React, { useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
let variants = {
  hide: { opacity: 0, scale: 1, transition: { duration: 2 } },
  show: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
};

let sidenav = {
  hides: { opacity: 1, y: -2050, transition: { duration: 0.2 } },
  shows: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
};
const Navbar = () => {
  let [show, setShow] = useState(true);
  let [active, setActive] = useState("Home");

  return (
    <div className="nav_container">
      <div className="hamburger" onClick={() => setShow(!show)}>
        {show ? <MenuIcon /> : <CloseIcon />}
      </div>
      <div className="nav_logo">
        <motion.h3
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, type: "spring" }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Coding_Buddy
        </motion.h3>
      </div>
      <motion.div
        className={show ? "shows":'hides'} id='nav_list' >
        <motion.ul variants={variants} initial="hide" animate="show">
          <motion.li variants={variants}>
            {" "}
            <Link
              activeClass="active"
              to="home"
              // spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="desktopMenuListItem"
              onClick={()=>setActive('Home')} id={active === 'Home' ? 'active':''}
            >
              <span  onClick={() => setShow(!show)}>Home</span>
            </Link>
          </motion.li>
          <motion.li variants={variants}>
            {" "}
            <Link
              activeClass="active"
              to="about"
              // spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="desktopMenuListItem"
              onClick={()=>setActive('About')} id={active === 'About' ? 'active':''}
            >
              <span  onClick={() => setShow(!show)}>About</span>
            </Link>
          </motion.li>
          <motion.li variants={variants}>
            {" "}
            <Link
              activeClass="active"
              to="skills"
              // spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="desktopMenuListItem"
              onClick={()=>setActive('Skills')} id={active === 'Skills' ? 'active':''}
            >
              <span onClick={()=>setShow(!show)}>Skills</span>
            </Link>
          </motion.li>
          <motion.li variants={variants}>
            {" "}
            <Link
              activeClass="active"
              to="services"
              // spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="desktopMenuListItem"
              onClick={()=>setActive('Services')} id={active === 'Services' ? 'active':''}
            >
              <span onClick={()=>setShow(!show)}>Services</span>
            </Link>
          </motion.li>
          <motion.li variants={variants} >
            {" "}
            <Link
              activeClass="active"
              to="project"
              // spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="desktopMenuListItem"
              onClick={()=>setActive('Project')} id={active === 'Project' ? 'active':''}
            >
              <span  onClick={()=>setShow(!show)}>Project</span>
            </Link>
          </motion.li>
          <motion.li variants={variants}>
            {" "}
            <Link
              activeClass="active"
              to="testimonial"
              // spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="desktopMenuListItem"
              onClick={()=>setActive('Testimonial')} id={active === 'Testimonial' ? 'active':''}
            >
              <span  onClick={()=>setShow(!show)}>Testimonial</span>
            </Link>
          </motion.li>
          <motion.li variants={variants}>
            {" "}
            <Link
              activeClass="active"
              to="contact"
              // spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="desktopMenuListItem"
              onClick={()=>setActive('Contact')} id={active === 'Contact' ? 'active':''}
            >
             <span onClick={()=>setShow(!show)}> Contact</span>
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./About.scss";
import {motion} from 'framer-motion'
import profile from "../Assets/about.png";


let boxes={
  hides:{opacity:0,scale:0.5},
  shows:{opacity:1,scale:1,transition:{staggerChildren:0.3,type:'spring'}}
};


const About = () => {
  return (
    <>
      <motion.div className="about_container" id="about">
        <motion.div className="title" initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1,transition:{type:'spring'}}}>
          <h2 >About Me</h2>
          <p >My Introduction</p>
        </motion.div>
        <motion.div className="sections">
          <motion.div className="left" initial={{x:-300,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration:1, type:'spring'}}}>
            <img src={profile} alt="profile" />
          </motion.div>

          <motion.div className="right">
            <motion.div className="card" variants={boxes} initial='hides' whileInView='shows'>
              <motion.div className="box-1" variants={boxes}>
                  <i className="uil uil-award"></i>
                <p>Experiance</p>
                <small>0 + years</small>
              </motion.div>
              <motion.div className="box-1" variants={boxes}>
              <i className="uil uil-rocket"></i>
                <p>Completed</p>
                <small>20 + Projects</small>
              </motion.div>
              <motion.div className="box-1" variants={boxes}>
              <i className="uil uil-headphones"></i>
                <p>Support</p>
                <small>Online 24/7</small>
              </motion.div>
            </motion.div>

            <motion.div className="summary" initial={{scale:0.5,opacity:0}} whileInView={{scale :1,opacity:1,transition:{duration:1,type:'spring',delay:0.5}}}>
              <p>FrontEnd Web Developer Fresher. I bring a strong foundation in HTML,CSS,Javascript & ReactJS .Eager to contribute to innovative web projects and continually expand my skill set to create dynamic and user-friendly!Ready to join Immediately</p>
            </motion.div>

            <motion.div className="resume" initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1,transition:{type:'spring',duration:0.5,delay:0.5}}}>
              <a href="https://drive.google.com/file/d/1Hi6wLZt_KMy8uHspWOTyhBHPzv7Vj1rX/view?usp=sharing">
                <button>Download CV<motion.i className="uil uil-file-download" initial={{y:0,opacity:0}} whileInView={{y:10,opacity:1,transition:{repeat:Infinity,duration:2}}} ></motion.i></button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;

import React, { useState } from "react";
import "./Project.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Projects from "./Constant";

let Filter = {
  hide: { opacity: 0, scale: 1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", staggerChildren: 0.2 },
  },
};
let Project_Item = {
  hide: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", staggerChildren: 0.2 },
  },
};
let actions = {
  hide: { opacity: 0, scale: 0.5, rotate: 0, duration: 4 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", duration: 2 },
  },
};
const Project = () => {
  let [filter, setFilter] = useState("All");
  let animation = Projects.filter(
    (item) => item.lang === "Animation,All"
  ).length;
  let All = Projects.filter((item) => item.title === "All").length;
  let Html_Css = Projects.filter(
    (item) => item.lang === "HTML & CSS,All"
  ).length;
  let Bootstrap = Projects.filter(
    (item) => item.lang === "Bootstrap,All"
  ).length;
  let Animation = Projects.filter(
    (item) => item.lang === "Animation,All"
  ).length;
  let Javascript = Projects.filter(
    (item) => item.lang === "Javascript,All"
  ).length;
  let React = Projects.filter((item) => item.lang === "React,All").length;
  let fullStack = Projects.filter(
    (item) => item.lang === "FullStack,All"
  ).length;

  return (
    <>
      <motion.div className="project_container" id="project">
        <motion.div
          className="project_title"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", duration: 1 },
          }}
        >
          <h2>Projects</h2>
          <small>Most recent work</small>
        </motion.div>

        <motion.div className="container">
          <motion.div
            className="filter_container"
            variants={Filter}
            initial="hide"
            whileInView="show"
          >
            <motion.button
              className={`${filter === "All" ? "active" : ""}`}
              onClick={() => setFilter("All")}
              variants={Filter}
            >
              All - <span>{All}</span>
            </motion.button>
            <motion.button
              className={`${filter === "HTML & CSS,All" ? "active" : ""}`}
              onClick={() => setFilter("HTML & CSS,All")}
              variants={Filter}
            >
              HTML & CSS - <span>{Html_Css}</span>
            </motion.button>
            <motion.button
              className={`${filter === "Bootstrap,All" ? "active" : ""}`}
              onClick={() => setFilter("Bootstrap,All")}
              variants={Filter}
            >
              Bootstrap - <span>{Bootstrap}</span>
            </motion.button>
            <motion.button
              className={`${filter === "Animation,All" ? "active" : ""}`}
              onClick={() => setFilter("Animation,All")}
              variants={Filter}
            >
              Animation - <span>{Animation}</span>
            </motion.button>
            <motion.button
              className={`${filter === "Javascript,All" ? "active" : ""}`}
              onClick={() => setFilter("Javascript,All")}
              variants={Filter}
            >
              Javascript - <span>{Javascript}</span>
            </motion.button>
            <motion.button
              className={`${filter === "React" ? "active" : ""}`}
              onClick={() => setFilter("React")}
              variants={Filter}
            >
              React JS - <span>{React}</span>
            </motion.button>
            <motion.button
              className={`${filter === "FullStack,All" ? "active" : ""}`}
              onClick={() => setFilter("FullStack,All")}
              variants={Filter}
            >
              Full Stack - <span>{fullStack}</span>
            </motion.button>
          </motion.div>
          <motion.div className="right">
            <motion.div
              className="project"
              variants={Project_Item}
              initial="hide"
              animate="show"
            >
              {Projects.filter((item, index) => item.lang.includes(filter)).map(
                (project, index) => (
                  <motion.div
                    key={project.index}
                    className="box"
                    variants={Project_Item}
                  >
                    {/* <div className="image">
                      <img src={project.image} alt="image" />
                    </div> */}
                    <div className="title">
                      <p>{project.name}</p>
                    </div>
                    <div className="description">
                      <p className="des_title">Description :</p>
                      <small>{project.description}</small>
                    </div>
                    <motion.div
                      className="actions"
                      variants={actions}
                      initial="hide"
                      whileInView="show"
                    >
                      <motion.div className="git" variants={actions}>
                        <a href={project.git} target="_blank">
                          <motion.i
                            class="uil uil-github"
                            variants={actions}
                          ></motion.i>
                        </a>
                      </motion.div>
                      <motion.div className="live" variants={actions}>
                        <a href={project.live} target="_blank">
                          <motion.i
                            class="uil uil-eye"
                            variants={actions}
                          ></motion.i>
                        </a>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;

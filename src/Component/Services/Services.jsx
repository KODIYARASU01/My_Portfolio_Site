import { React, useState } from "react";
import "./Services.scss";

import { motion } from "framer-motion";

import Gear from '../Assets/project/gear-spinner.svg';
import Gears from '../Assets/project/bouncing-ball.svg';
import Infinite from '../Assets/project/infinite-spinner.svg'
let services = {
  hide: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", staggerChildren: 0.2 },
  },
};
const Services = () => {
  let [service, setService] = useState(false);
  let [service1, setService1] = useState(false);
  let [service2, setService2] = useState(false);
  return (
    <>
      <motion.div className="services_container" id="services">
        <motion.div
          className="service_title"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", duration: 1 },
          }}
        >
          <h2>Service</h2>
          <small>What I offer</small>
        </motion.div>

        <motion.div
          className="service_domain"
          variants={services}
          initial="hide"
          whileInView="show"
        >
          <motion.div
            className="first"
            variants={services}
            onClick={() => setService(!service)}
          >
            <img src={Gear} alt="gear" />
            <motion.h4
              initial={{ opacity: 0 }}
              animate={service ? { opacity: 0 } : { opacity: 1 }}
            >
              UI/UX Development
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={
                service
                  ? { opacity: 1, y: -110, transition: { type: "spring" } }
                  : { opacity: 0, y: 0 }
              }
            >
              {service
                ? "Work with other developers to ensure that the website is functional and visually appealing.Liaise with the client to gauge their needs and expectations.Plan the layout of the website.Ensure that the website is optimized for various devices.Use analytics to test client enjoyment."
                : ""}
            </motion.p>

            <motion.small
              onClick={() => setService(!service)}
              initial={{ opacity: 1, y: 0 }}
              animate={
                service
                  ? { opacity: 1, y: -100, transition: { type: "spring" } }
                  : { opacity: 1, y: 0 }
              }
            >
              {!service ? "Read More" : "Close"}
              {!service ? <i class="uil uil-toggle-off" style={{color:'red'}}></i> :<i class="uil uil-toggle-on" style={{color:'green'}}></i>}
            </motion.small>
          </motion.div>
          <motion.div
            className="first"
            variants={services}
            onClick={() => setService1(!service1)}
          >
           <img src={Gears} alt="gears" />
            <motion.h4
              initial={{ opacity: 0 }}
              animate={service1 ? { opacity: 0 } : { opacity: 1 }}
            >
              Web Application Dev
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={
                service1
                  ? { opacity: 1, y: -110, transition: { type: "spring" } }
                  : { opacity: 0, y: 0 }
              }
            >
              {service1
                ? "Designing user interfaces and navigation menus.Writing and reviewing code for sites, typically HTML, XML, or JavaScript.Integrating multimedia content onto a site.Testing web applications.Troubleshooting problems with performance or user experience.Collaborating with designers, developers, and stakeholders."
                : ""}
            </motion.p>
            <motion.small
              onClick={() => setService1(!service1)}
              initial={{ opacity: 1, y: 0 }}
              animate={
                service1
                  ? { opacity: 1, y: -100, transition: { type: "spring" } }
                  : { opacity: 1, y: 0 }
              }
            >
              {!service1 ? "Read More" : "Close"}
              {!service1 ? <i class="uil uil-toggle-off" style={{color:'red'}}></i> :<i class="uil uil-toggle-on" style={{color:'green'}}></i>}
            </motion.small>
          </motion.div>
          <motion.div
            className="first"
            variants={services}
            onClick={() => setService2(!service2)}
          >
          <img src={Infinite} alt="infinite" />
            <motion.h4  initial={{ opacity: 0 }}
              animate={service2 ? { opacity: 0 } : { opacity: 1 }}>MERN Stack Develop</motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={
                service2
                  ? { opacity: 1, y: -110, transition: { type: "spring" } }
                  : { opacity: 0, y: 0 }
              }
            >
              {service2
                ? "Work with development teams and product managers to ideate software solutions.Design client-side and server-side architecture.Build the front-end of applications through appealing visual design.Develop and manage well-functioning databases and applications.Write effective APIs.Test software to ensure responsiveness and efficiency.Troubleshoot, debug and upgrade software.Create security and data protection settings.Build features and applications with a mobile responsive design.Write technical documentation.Work with data scientists and analysts to improve software."
                : ""}
            </motion.p>
            <motion.small onClick={() => setService2(!service2)}initial={{ opacity: 1, y: 0 }}
              animate={
                service2
                  ? { opacity: 1, y: -100, transition: { type: "spring" } }
                  : { opacity: 1, y: 0 }
              }>
              {!service2 ? "Read More" : "Close"}
              {!service2 ? <i class="uil uil-toggle-off" style={{color:'red'}}></i> :<i class="uil uil-toggle-on" style={{color:'green'}}></i>}
            </motion.small>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;

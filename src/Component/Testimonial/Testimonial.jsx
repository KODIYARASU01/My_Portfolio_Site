import React from "react";
import "./Testimonial.scss";
import Cards from "../utils/testimonial";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <motion.div className="textimonial_container" id="testimonial">
        <motion.div
          className="testimonial_title"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { type: "spring", duration: 1 },
          }}
        >
          <h2>My Skill's Developed By</h2>
          <small>Testimonial</small>
        </motion.div>

        <Swiper
          className="textimonial_card"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {Cards.map((card,index) => (
            <SwiperSlide key={index} className="details">
              <div className="name">
                <img src={card.image} alt="profile" />
                <h5>{card.name}</h5>
              </div>
              <div className="content">
                <p>{card.description}</p>
              </div>
              <motion.div className="channel_name">
                <small>{card.Channel_name}</small>
                <motion.small>
                  <motion.a
                    initial={{ opacity: 1, rotate: -20 ,transition:{duration:2,repeat:Infinity}}}
                    whileInView={{opacity:1,rotate:20,transition:{repeat:Infinity,duration:2}}}
                    href={card.link}
                  >
                    {" "}
                    <i class="uil uil-eye"></i>
                  </motion.a>
                </motion.small>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default Testimonial;

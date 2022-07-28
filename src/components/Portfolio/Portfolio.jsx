import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.webp";
import Ecommerce from "../../img/ecommerce.webp";
import HOC from "../../img/hoc.webp";
import MusicApp from "../../img/musicapp.webp";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 
  return (
    <div className="portfolio" id="portfolio">
    {/* heading */}
    <span style={{color: darkMode ? "white": ""}}>Recent Projetos</span>
    <span>Portfolio</span>

    {/* slider */}
    <Swiper
      apaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
    >
    <SwiperSlide>
      <img src={Sidebar} alt=""></img>
    </SwiperSlide>
    <SwiperSlide>
      <img src={Ecommerce} alt=""></img>
    </SwiperSlide>
    <SwiperSlide>
      <img src={MusicApp} alt=""></img>
    </SwiperSlide>
    <SwiperSlide>
      <img src={HOC} alt=""></img>
    </SwiperSlide>

    </Swiper>
    </div>
  );
};

export default Portfolio
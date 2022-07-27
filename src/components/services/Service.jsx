import React,{useContext} from 'react';
import "./Services.css";
import Card from "../Card/Card"
import { themeContext } from '../../Context';
import Resume from "./resume.pdf";
import {motion} from "framer-motion";
import HeartEmoji from "../../img/heartemoji.webp";
import Glasses from "../../img/glasses.webp";
import Humble from "../../img/humble.webp";


const Service = () => {
  // context 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // transition ;
  const transition = {
    duration: 1,
    type: "spring",
  };
  
  return (
    <div className="services" id="services" >
    {/* left side */}
    <div className="awesome">
      {/* darkMode */}
      <span style={{color: darkMode ? "white": ""}}>My Awesome</span>
      <span>services</span>
      <span>lorem ipsum dolor sit amet, consectetur adip.
      <br/>
      lorem ipsum dolor sit amet.
      </span>

      <a href={Resume} download >
        <button className="button s-button">Download CV</button>
      </a>
      <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
    </div>
    {/* right */}
    <div className="cards">
      {/* first card */}
      <motion.div
      initial={{left: "25rem"}}
      whileInView={{left: "14rem"}}
      transition={transition}
      >
      <Card
        emoji={HeartEmoji}
        heading={"Design"}
        detail={"Photoshop, Figma, Adobe xd"}
       />
      </motion.div>

      {/* second card */}
      <motion.div
      initial={{left: "-11rem",top:"12rem"}}
      whileInView={{left: "-4rem"}}
      transition={transition}
      >
      <Card
        emoji={Glasses}
        heading={"Developer"}
        detail={"Html, Css, JavaScript, React"}
       />
      </motion.div>

      {/* 3rd card */}
      <motion.div
      initial={{top: "19rem", left: "25rem"}}
      whileInView={{left: "12rem"}}
      transition={transition}
      >
      <Card
        emoji={Humble}
        heading={"UI/UX"}
        detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
        color="rgba(252, 166, 31, 0.45)"
       />
      </motion.div>
      <div className="blur sblur2"
        style={{background: "var(--purple)"}}
       ></div>
    </div>
    </div>

  );
};

export default Service
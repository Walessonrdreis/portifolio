import React, {useContext} from 'react';
import "./Intro.css";
import Vector1 from "../../img/Vector1.webp";
import Vector2 from "../../img/Vector2.webp";
import boy from "../../img/boy.webp";
import glassesimoji from "../../img/glassesimoji.webp";
import thumbup from "../../img/thumbup.webp";
import crown from "../../img/crown.webp";
import Github from "../../img/github.webp";
import LinkedIn from "../../img/linkedin.webp";
import Instagram from "../../img/instagram.webp";
import {themeContext} from "../../Context";
import {motion} from "framer-motion";
import {Link} from "react-scroll";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  //Transition
  const transition = {duration: 2, type: "spring"};

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">

    {/*left name side */}
    <div className="i-left">
      <div className="i-name">
      {/*carrega o tema em darkMode */}
      <span style={{color: darkMode ? "white" : ""}}>Hy! I Am</span>
      <span>Walesson Reisba</span>
      <span>Frontend developer with initial level of experience in web design and development, performing work with Quality.</span>
      </div>
      <Link to="contact" spy={true} smooth={true}>
      <button className="button i-button">Hire me</button>
      </Link>
      {/*social icons */}
      <div className="i-icons">
        <img src={Github} alt=""/>
        <img src={LinkedIn} alt=""/>
        <img src={Instagram} alt=""/>
      </div>
    </div>{/*end i-left*/}
    {/* right image side */}  
    <div className="i-right">
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      {/* animation */}
      <motion.img
        initial={{left: "-36%"}}
        whileInView={{left: "-24%"}}
        transition={transition}
        src={glassesimoji}
        alt=""
       />
      <motion.div
        initial={{top: "-4",left: "74%"}}
        whileInView={{left: "68%"}}
        transition={transition}
        className="floating-div"
       >
       <FloatingDiv img={thumbup} text1="HTML/CSS" text2="ReactJs" />
      </motion.div>

      <div className="blur" style={{background: "rgb(238 210 255"}} >
      <div className="blur" style={{
        background: "#c1f5ff",
        top:"17rem",
        width: "21rem",
        height:"11rem",
        left: "-9rem",
        }}>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Intro;
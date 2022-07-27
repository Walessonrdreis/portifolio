import React, { useContext } from 'react';
import "./Works.css";
import Upwork from "../../img/Upwork.webp";
import Fiverr from "../../img/fiverr.webp";
import Amazon from "../../img/amazon.webp";
import Shopify from "../../img/Shopify.webp";
import Facebook from "../../img/Facebook.webp";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  //transition
  const transition = {duration: 3.5, type:"spring"}
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for all these
          </span>
          <span>Brands is Clients</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <Link to="content" smooth={true} spy={true}>
          <button className="button s-button">Hire Me</button>
          </Link>
          <div className="blur s-blur1"
          style={{background: "#abf1ff94"}}>
          </div>
        </div>
        </div>
        {/* right side*/}
        <div className="w-right">
          <motion.div
            initial={{rotate:45}}
            whileInView={{rotate: 0}}
            viewport={{margin: "-40px"}}
            transition={transition}
            className="w-mainCircle"
          >
          <div className="w-secClicle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secClicle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secClicle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secClicle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secClicle">
            <img src={Facebook} alt="" />
          </div>
          </motion.div>
          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  );
};

export default Works
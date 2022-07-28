import "./App.css";
import {useContext} from "react";
import {themeContext} from "./Context";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/services/Service";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";


function App(){
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return(
    <div className="App"
    style={{ 
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
    <Navbar />
    <Intro />
    <Services />
    <Experience />
    <Works />
    <Portfolio />
    <Testimonial />

   
    
    
    

    </div>
  )
}
export default App;
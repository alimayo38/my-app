// import Contact from "./Components/Contact";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { useState } from "react";
import React from "react";

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      // setInterval(()=>{
      //   document.title='Facebook -Dark Mode'

      // },2000)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";

      // setInterval(()=>{
      //   document.title='Facebook -Light Mode'

      // },2000)
    }
  };

  return (
    <>
    {/* // <Router> */}
     
        
          <Navbar mode={mode} toggleMode={toggleMode} />
          {/* <Switch>
            <Route exact path="/">
              <div className="my-5 mx-5 d-flex align-items-center justify-content-center ">
                <Login mode={mode} toggleMode={toggleMode} />
              </div>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>

          {/* <About/> */}
      
{/*       
    // </Router> */} 

    <div className="my-5 mx-5 d-flex align-items-center justify-content-center ">
    <Login mode={mode} toggleMode={toggleMode} />
  </div>

</>

  );
}

export default App;

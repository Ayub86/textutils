
import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
 import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  // new addition

  const[mode,setMode]=useState('light');
 
  const[alret,setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === "light") {
        setMode("dark ");
        document.body.style.backgroundColor = "#042743"
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Dark Mode";
    }
    else {
        setMode("light");
        document.body.style.backgroundColor = "white"
        showAlert("Light mode has been enabled", "success");
        document.title = "TextUtils - Light Mode";
    }
}
   
   return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Darkmode Enabled ", "Successfully")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode Enabled ", "Successfully")

    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />

        <div className="container my-3">
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextArea showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />
              }
            ></Route>
          </Routes>

        </div>

        
      </Router>
    </>
  );
}

export default App;

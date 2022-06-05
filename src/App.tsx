import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Result from "./components/Result";
import {ContextData} from "./store/Context";

function App() {
    const [value, setValue] = useState<string>('value');
    function changeValue() {
        setValue(prevState => prevState + '1')
    }

  return (
      <BrowserRouter>
      <ContextData.Provider value={{value: value, setValue: changeValue}}>
          <div className="App">
              <h2 style={{textAlign: "center"}}>React Form</h2>
              <button onClick={changeValue}>
                  ssss
              </button>
              <Routes>
                  <Route index element={<Step1/>}/>
                  <Route path='/step2' element={<Step2/>}/>
                  <Route path='/step3' element={<Step3/>}/>
                  <Route path='/result' element={<Result/>}/>
              </Routes>

          </div>
      </ContextData.Provider>
      </BrowserRouter>
  );
}

export default App;

import React from 'react';

import './App.css';
import { useState} from 'react';

import TooltipList from './tooltip/tooltipList';
import hu from './tooltip/toolshu.json'
import en from './tooltip/toolsen.json'
import ub from './tooltip/toolsub.json'
import Select from 'react-select';


function App() {
     
  const [langState, setLanguage] = useState("select language");

  return (
    <div className="App">


    <div className="container p-5">
      <select
        className="custom-select"
        value={langState}
        onChange={(e) => {
          const selectedFood = e.target.value;
          setLanguage(selectedFood);
        }}
      >
        <option value="en">english</option>
        <option value="hu">hungarian</option>
        <option value="ub">ubuntu</option>
      </select>
      {langState}
    </div>
        <div>
          
         
          <TooltipList data={langState==='hu' ? hu : en}/>

        </div>
     
    </div>
  );
}

export default App;

import React from "react";
import "./style.css";
import background from './assets/background.svg';
import geometric_shapes from './assets/geometric_shapes.svg';




export default function App() {
  return (
    <div className='login'>
      <img src={background}   className="img_back"/>
      <div className="geometric"></div>
      <div className="parent_1">
        <div className="panel_login"></div>
        <div className="content_1">
          <h1>value</h1>
        </div>
      </div>  
    </div>
  );
}

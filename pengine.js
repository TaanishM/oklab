import React, { useState } from "react";
import "./pengine.css";
import Randcolor from "./colorselector";
import P5Sketchtest from "./p5sketchtest";
import hexRgb from "hex-rgb";
import RGBextract from "./stringextractor";

function Pengine(){

const { color1, color2, color3, color4, color5, color6, color7, generateColor } = 
    Randcolor();

const colorset = [color1, color2, color3, color4, color5, color6, color7];
const colorset2 = colorset.map((color) => hexRgb(color,{format:'css'}));
const colorset3 = colorset2.map((color)=>RGBextract(color));

const [clickstat, setClick] = useState(false);

function handleHover() {
    setClick(true);
  }
function resetClick() {
    setClick(false);
}  
return <div className="main">
    <div className="bar">
        <div className="rectangle0">
            {/* <button className="hamb"/> */}
            <div className="cc">colourCorrect</div>
        </div>
        <div className="frame1">
        <div className="group1">
            <div className="group3">
                    <button className="rectangle3" onClick={generateColor} onMouseEnter={handleHover} onMouseLeave={resetClick}>RANDOMIZE</button>
                <button className="rectangle">SAVE</button>       
                <button className="rectangle2">LOAD</button>
            </div>
        </div>
        </div>
    </div>
    <div className="palette">
        <button className="box1" onClick style={{background:"#"+colorset[0]}}/>
        <button className="box2" onClick style={{background:"#"+colorset[1]}}/>
        <button className="box3" onClick style={{background:"#"+colorset[2]}}/>
        <button className="box4" onClick style={{background:"#"+colorset[3]}}/>
        <button className="box5" onClick style={{background:"#"+colorset[4]}}/>
        <button className="box6" onClick style={{background:"#"+colorset[5]}}/>
        {/* <button className="box7" onClick style={{background:"#"+colorset[6]}}/>
        <button className="box8" onClick/> */}
    </div>
    <div className="p5js" /*style={{background:"#"+colorset[6]}}*/><P5Sketchtest data={colorset3} clickstat={clickstat}/></div>
    
</div>
}
export default Pengine;
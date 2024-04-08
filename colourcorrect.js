import React, { useState,useRef } from "react";
import "./pengine.css";
// import Randcolor from "./colorselector";
import P5Sketch from "./p5perlin";
import hexRgb from "hex-rgb";
import RGBextract from "./stringextractor";

function Cpicker(){

var [color1, setColor1] = useState(Math.random().toString(16).substr(-6));
var [color2, setColor2] = useState(Math.random().toString(16).substr(-6));
var [color3, setColor3] = useState(Math.random().toString(16).substr(-6));
var [color4, setColor4] = useState(Math.random().toString(16).substr(-6));
var [color5, setColor5] = useState(Math.random().toString(16).substr(-6));
var [color6, setColor6] = useState(Math.random().toString(16).substr(-6));

function Random() {
    setColor1(Math.random().toString(16).substr(-6));
    setColor2(Math.random().toString(16).substr(-6));
    setColor3(Math.random().toString(16).substr(-6));
    setColor4(Math.random().toString(16).substr(-6));
    setColor5(Math.random().toString(16).substr(-6));
    setColor6(Math.random().toString(16).substr(-6));
}

const colorset = [color1, color2, color3, color4, color5, color6];
const colorset2 = colorset.map((color) => hexRgb(color,{format:'css'}));
const colorset3 = colorset2.map((color)=>RGBextract(color));

const [clickstat, setClick] = useState("false");
function handleHover() {
    setClick("true");
  }
function resetClick() {
    setClick("false");
}
function snapClick() {
    setClick("snap");
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
                <button className="rectangle3" onClick={Random} onMouseEnter={handleHover} onMouseLeave={resetClick}>RANDOMIZE</button>
                {/* <button className="rectangle">SAVE</button>*/}
                <button className="rectangle" onMouseEnter={handleHover} onMouseLeave={resetClick}>REFRESH</button>   
                <button className="rectangle2" onMouseEnter={snapClick} onMouseLeave={resetClick}>SNAP</button>
            </div>
        </div>
        </div>
    </div>
    
    <div className="palette">

        <input type="color" name='b1' className="box1" Value={"#"+colorset[0]} onChange={e=>setColor1((e.target.value.substring(1)))}/>
        <label value='#' className="label1">#</label>
        <input type="text" className="text1" Value={color1} onChange={e=>{if(e.target.value.length===6)setColor1(e.target.value)}}/>

        <input type="color" className="box2" Value={"#"+colorset[1]} onChange={e=>setColor2((e.target.value.substring(1)))}/>
        <label value='#' className="label2">#</label>
        <input type="text" className="text2" Value={color2} onChange={e=>{if(e.target.value.length===6)setColor2(e.target.value)}}/>

        <input type="color" className="box3" Value={"#"+colorset[2]} onChange={e=>setColor3((e.target.value.substring(1)))}/>
        <label value='#' className="label3">#</label>
        <input type="text" className="text3" Value={color3} onChange={e=>{if(e.target.value.length===6)setColor3(e.target.value)}}/>

        <input type="color" className="box4" Value={"#"+colorset[3]} onChange={e=>setColor4((e.target.value.substring(1)))}/>
        <label value='#' className="label4">#</label>
        <input type="text" className="text4" Value={color4} onChange={e=>{if(e.target.value.length===6)setColor4(e.target.value)}}/>

        <input type="color" className="box5" Value={"#"+colorset[4]} onChange={e=>setColor5((e.target.value.substring(1)))}/>
        <label value='#' className="label5">#</label>
        <input type="text" className="text5" Value={color5} onChange={e=>{if(e.target.value.length===6)setColor5(e.target.value)}}/>

        <input type="color" className="box6" Value={"#"+colorset[5]} onChange={e=>setColor6((e.target.value.substring(1)))}/>
        <label value='#' className="label6">#</label>
        <input type="text" className="text6" Value={color6} onChange={e=>{if(e.target.value.length===6)setColor6(e.target.value)}}/>
        
        {/* <button className="box7" onClick style={{background:"#"+colorset[6]}}/>
        <button className="box8" onClick/> */}
    </div>

    <div className="p5js"><P5Sketch data={colorset3} clickstat={clickstat}/></div>
    
</div>
}
export default Cpicker;
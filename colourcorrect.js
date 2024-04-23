import React, { useState } from "react";
import "./pengine.css";
// import Randcolor from "./colorselector";
import P5Perlin from "./p5perlin";
import hexRgb from "hex-rgb";
import RGBextract from "./stringextractor";
import Csengine from "./csengine";
import P5Grad from "./p5grad";
import Complementary from "./complement";

function Cpicker(){

var [color1, setColor1] = useState(Math.random().toString(16).substr(-6));      //color init
var [color2, setColor2] = useState(Math.random().toString(16).substr(-6));
var [color3, setColor3] = useState(Math.random().toString(16).substr(-6));
var [color4, setColor4] = useState(Math.random().toString(16).substr(-6));
var [color5, setColor5] = useState(Math.random().toString(16).substr(-6));
var [color6, setColor6] = useState(Math.random().toString(16).substr(-6));
// var [check, setCheck] = useState('');

function Random() {                                                             //random init
    setColor1(Math.random().toString(16).substr(-6));
    setColor2(Math.random().toString(16).substr(-6));
    setColor3(Math.random().toString(16).substr(-6));
    setColor4(Math.random().toString(16).substr(-6));
    setColor5(Math.random().toString(16).substr(-6));
    setColor6(Math.random().toString(16).substr(-6));
}

const colorset = [color1, color2, color3, color4, color5, color6];
const colorset2 = colorset.map((color) => hexRgb(color,{format:'css'}));
const colorset3 = colorset2.map((color)=>RGBextract(color));                  //2D matrix holding RGB values per color
const colorcom = colorset.map((val)=>Complementary(val));

const [clickstat, setClick] = useState("false");                                //click handlers
function handleHover() {
    setClick("true");
  }
function resetClick() {
    setClick("false");
}
function snapClick() {
    setClick("snap");
}
const [checked, setChecked] = useState();

function handleCheck(e) {
    if(checked===false){
        setChecked(true);
    }
    else{
        setChecked(false);
    }
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

        <input type="color" className="box1" Value={"#"+colorset[0]} onChange={e=>setColor1((e.target.value.substring(1)))}/>
            <label value='#' className="label1"><b>#</b></label>
                <input title='Hex' type="text" className="text1" Value={color1} onChange={e=>{if(e.target.value.length===6)setColor1(e.target.value)}}/>
                    <label className="hsl1" title="HSL"><b>HSL: </b><Csengine type={'HSL'} color={color1}/></label>
                        <label className="xyz1" title="XYZ"><Csengine type={'XYZ'} color={color1}/></label>
                            <label className="cmy1" title="CMY"><Csengine type={'CMY'} color={color1}/></label>
                                <label className="okl1" title="OKLab"><Csengine type={'OKL'} color={color1}/></label>
                                    <input title='Set Complementary Color' className='complementary1' type='button' Value='Complementary' style={{backgroundColor: '#'+colorcom[0]}} onClick={e=>setColor2(colorcom[0])}/>

        <input type="color" className="box2" Value={"#"+colorset[1]} onChange={e=>setColor2((e.target.value.substring(1)))}/>
            <label value='#' className="label2"><b>#</b></label>
                <input title='Hex' type="text" className="text2" Value={color2} onChange={e=>{if(e.target.value.length===6)setColor2(e.target.value)}}/>
                    <label className="hsl2" title="HSL"><b>HSL: </b><Csengine type={'HSL'} color={color2}/></label>
                    <label className="xyz2" title="XYZ"><Csengine type={'XYZ'} color={color2}/></label>
                        <label className="cmy2" title="CMY"><Csengine type={'CMY'} color={color2}/></label>
                            <label className="okl2" title="OKLab"><Csengine type={'OKL'} color={color2}/></label>
                                    <input title='Set Complementary Color' className='complementary2' type='button' Value='Complementary' style={{backgroundColor: '#'+colorcom[1]}} onClick={e=>setColor3(colorcom[1])}/>
        
        <input type="color" className="box3" Value={"#"+colorset[2]} onChange={e=>setColor3((e.target.value.substring(1)))}/>
            <label value='#' className="label3"><b>#</b></label>
                <input title='Hex' type="text" className="text3" Value={color3} onChange={e=>{if(e.target.value.length===6)setColor3(e.target.value)}}/>
                    <label className="hsl3" title="HSL"><b>HSL: </b><Csengine type={'HSL'}  color={color3}/></label>
                        <label className="xyz3" title="XYZ"><Csengine type={'XYZ'} color={color3}/></label>
                            <label className="cmy3" title="CMY"><Csengine type={'CMY'} color={color3}/></label>
                                <label className="okl3" title="OKLab"><Csengine type={'OKL'} color={color3}/></label>
                                    <input title='Set Complementary Color' className='complementary3' type='button' Value='Complementary' style={{backgroundColor: '#'+colorcom[2]}} onClick={e=>setColor4(colorcom[2])}/>

        <input type="color" className="box4" Value={"#"+colorset[3]} onChange={e=>setColor4((e.target.value.substring(1)))}/>
            <label value='#' className="label4"><b>#</b></label>
                <input title='Hex' type="text" className="text4" Value={color4} onChange={e=>{if(e.target.value.length===6)setColor4(e.target.value)}}/>
                    <label className="hsl4" title="HSL"><b>HSL: </b><Csengine type={'HSL'}  color={color4}/></label>
                        <label className="xyz4" title="XYZ"><Csengine type={'XYZ'} color={color4}/></label>
                            <label className="cmy4" title="CMY"><Csengine type={'CMY'} color={color4}/></label>
                                <label className="okl4" title="OKLab"><Csengine type={'OKL'} color={color4}/></label>
                                    <input title='Set Complementary Color' className='complementary4' type='button' Value='Complementary' style={{backgroundColor: '#'+colorcom[3]}} onClick={e=>setColor5(colorcom[3])}/>

        <input type="color" className="box5" Value={"#"+colorset[4]} onChange={e=>setColor5((e.target.value.substring(1)))}/>
            <label value='#' className="label5"><b>#</b></label>
                <input title='Hex' type="text" className="text5" Value={color5} onChange={e=>{if(e.target.value.length===6)setColor5(e.target.value)}}/>
                    <label className="hsl5" title="HSL"><b>HSL: </b><Csengine type={'HSL'}  color={color5}/></label>
                        <label className="xyz5" title="XYZ"><Csengine type={'XYZ'} color={color5}/></label>
                            <label className="cmy5" title="CMY"><Csengine type={'CMY'} color={color5}/></label>
                                <label className="okl5" title="OKLab"><Csengine type={'OKL'} color={color5}/></label>
                                    <input title='Set Complementary Color' className='complementary5' type='button' Value='Complementary' style={{backgroundColor: '#'+colorcom[4]}} onClick={e=>setColor6(colorcom[4])}/>

        <input type="color" className="box6" Value={"#"+colorset[5]} onChange={e=>setColor6((e.target.value.substring(1)))}/>
            <label value='#' className="label6"><b>#</b></label>
                <input title='Hex' type="text" className="text6" Value={color6} onChange={e=>{if(e.target.value.length===6)setColor6(e.target.value)}}/>
                    <label className="hsl6" title="HSL"><b>HSL: </b><Csengine type={'HSL'}  color={color6}/></label>
                        <label className="xyz6" title="XYZ"><Csengine type={'XYZ'} color={color6}/></label>
                            <label className="cmy6" title="CMY"><Csengine type={'CMY'} color={color6}/></label>
                                <label className="okl6" title="OKLab"><Csengine type={'OKL'} color={color6}/></label>
                                    <input title='Set Complementary Color' className='complementary6' type='button' Value='Complementary' style={{backgroundColor: '#'+colorcom[5]}} onClick={e=>setColor1(colorcom[5])}/>

        {/* <button className="box7" onClick style={{background:"#"+colorset[6]}}/>
        <button className="box8" onClick/> */}
        
    </div>
    <div className='check'><input type='button' value="Toggle Gradient" onClick={handleCheck}/></div>
    <div className="p5js">{!checked ? <P5Perlin data={colorset3} clickstat={clickstat}/>:<P5Grad data={colorset3} hexdata={colorset} clickstat={clickstat}/>}</div>
    
</div>
}
export default Cpicker;
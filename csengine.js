import React from 'react';
import spaces from 'color-space';
import hexRgb from 'hex-rgb';
import RGBextract from './stringextractor';

function Csengine(props){
var maincol = props.color;
var colorconv = hexRgb(maincol,{format:'css'});
var colorconvRGB = RGBextract(colorconv);
var colorconvHSL = spaces.rgb.hsl(colorconvRGB); 
colorconvHSL=colorconvHSL.map((val)=>Math.round(val));
return colorconvHSL[0]+" "+colorconvHSL[1]+" "+colorconvHSL[2];
}
export default Csengine;

// const result = Math.random().toString(16).substr(-6);    //testing stubs
// const res2 = hexRgb(result,{format:'css'});
// var rgb1 = RGBextract(res2); 
// var res3 = spaces.rgb.lab(rgb1);  //requires clean rgb values
// var res4 = spaces.rgb.hsl(rgb1);
// res4=res4.map((val)=>Math.round(val));
// return <div 
//         style={{
//             height: "100vh",
//             width: "100vw",
//             backgroundColor:res2 ,
//             display: "flex",   }}>

//             <h1>{result}</h1>
//             <h1>{rgb1}</h1>
//             <h2>{res2}</h2>
//             <h3>{res4[0]} {res4[1]} {res4[0]}</h3>

// </div>}
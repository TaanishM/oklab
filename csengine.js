import React from 'react';
import App from '../App';
import spaces from 'color-space';
import hexRgb from 'hex-rgb';
import RGBextract from './stringextractor';

function Csengine(){
const result = Math.random().toString(16).substr(-6);
const res2 = hexRgb(result,{format:'css'});
var res3 = spaces.rgb.lab([227,13,77]);  //troubleshoot colourspace engine to work with seeded values
var res4 = spaces.lab.hsl(res3);
// const str = res2.substring(res2.indexOf("(") + 1,res2.lastIndexOf(")"));
// const str2=str.split(" ");
const str = RGBextract(res2);

return <div 
        style={{
            height: "100vh",
            width: "100vw",
            backgroundColor:res2 ,
            display: "flex",   }}>
            {res2}
            {str[0]}{str[1]}{str[2]}

</div>}
export default Csengine;
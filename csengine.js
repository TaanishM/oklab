import spaces from 'color-space';
import hexRgb from 'hex-rgb';
import RGBextract from './stringextractor';
import Oklabconv from './oklabconv';

function Csengine(props){

var maincol = props.color;

var colorconv = hexRgb(maincol,{format:'css'});
var colorconvRGB = RGBextract(colorconv);
 
if(props.type==='HSL'){
    var colorconvHSL = spaces.rgb.hsl(colorconvRGB);
    colorconvHSL=colorconvHSL.map((val)=>Math.round(val));
    return colorconvHSL[0]+"° "+colorconvHSL[1]+"% "+colorconvHSL[2]+"%";
}

if(props.type==='XYZ'){
    var colorconvXYZ = spaces.rgb.xyz(colorconvRGB);
    colorconvXYZ = colorconvXYZ.map((val)=>Math.round(val));
    return <>
    <strong>X: </strong>{colorconvXYZ[0]}<strong> Y: </strong>{colorconvXYZ[1]} <strong> Z: </strong>{colorconvXYZ[2]}
    </>
}

if(props.type==='CMY'){
    var colorconvCMY = spaces.rgb.cmy(colorconvRGB);
    colorconvCMY = colorconvCMY.map((val)=>Math.round(val));
    return <>
    <strong>C: </strong>{colorconvCMY[0]}<strong> M: </strong>{colorconvCMY[1]} <strong> Y: </strong>{colorconvCMY[2]}
    </>
}

if(props.type==='OKL'){
    var colorconvOKL = Oklabconv(colorconvRGB);
    colorconvOKL = colorconvOKL.map((val)=>(Math.floor(val*1000)/1000));
    return <><strong>L: </strong>{colorconvOKL[0]}<strong> a: </strong>{colorconvOKL[1]} <strong> b: </strong>{colorconvOKL[2]}</>
}
}
export default Csengine;

//testing stubs
// const result = Math.random().toString(16).substr(-6);    
// const res2 = hexRgb(result,{format:'css'});
// var rgb1 = RGBextract(res2); 
// var res3 = spaces.rgb.lab(rgb1);  //requires clean rgb values
// var res4 = spaces.rgb.hsl(rgb1);
// res4=res4.map((val)=>Math.round(val));
// return <div 
//         style={{
//             height: "100vh",width: "100vw",
//             backgroundColor:res2 ,
//             display: "flex",   }}>
//             <h1>{result}</h1>
//             <h1>{rgb1}</h1>
//             <h2>{res2}</h2>
//             <h3>{res4[0]} {res4[1]} {res4[0]}</h3>
// </div>}
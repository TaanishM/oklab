import hexRgb from "hex-rgb";
import RGBextract from "./stringextractor";
import rgbHex from "rgb-hex";

function Complementary(props){

    var maincol = props;

    var colorconv = hexRgb(maincol,{format:'css'});
    var colorconvRGB = RGBextract(colorconv);

    colorconvRGB=colorconvRGB.map((val)=>Math.abs(255-val));

    var complhex = rgbHex(colorconvRGB[0],colorconvRGB[1],colorconvRGB[2]);
    return complhex;

}
export default Complementary;
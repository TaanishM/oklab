const gammaToLinear = (c) =>
  c >= 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;

function Oklabconv(props){

    var data = props;
    
    var r = gammaToLinear(data[0] / 255);
    var g = gammaToLinear(data[1] / 255);
    var b = gammaToLinear(data[2] / 255);
 
    var l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    var m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    var s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
   
    var L = Math.cbrt(l);
    var A = Math.cbrt(m);
    var B = Math.cbrt(s);
    
    const labarr = [L,A,B];

    return labarr;
}
export default Oklabconv;
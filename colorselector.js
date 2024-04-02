import { useState } from 'react';
 
const Randcolor = () => {
    const [color1, setColor1] = useState("000000")
    const [color2, setColor2] = useState("000000")
    const [color3, setColor3] = useState("000000")
    const [color4, setColor4] = useState("000000")
    const [color5, setColor5] = useState("000000")
    const [color6, setColor6] = useState("000000")
    const [color7, setColor7] = useState("000000")
    
    const generateColor = () => {
        setColor1(Math.random().toString(16).substr(-6));
        setColor2(Math.random().toString(16).substr(-6));
        setColor3(Math.random().toString(16).substr(-6));
        setColor4(Math.random().toString(16).substr(-6));
        setColor5(Math.random().toString(16).substr(-6));
        setColor6(Math.random().toString(16).substr(-6));
        setColor7(Math.random().toString(16).substr(-6));
    };
    return { color1, color2, color3, color4, color5, color6, color7, generateColor };
 
};
export default Randcolor;
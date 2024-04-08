import React, { useState, useEffect } from "react";
import "./pengine.css";
import P5Sketch from "./p5perlin";
import hexRgb from "hex-rgb";
import RGBextract from "./stringextractor";

function Cpicker() {
    const [colors, setColors] = useState(Array.from({ length: 6 }, () => Math.random().toString(16).substr(-6)));
    const [clickState, setClickState] = useState("false");
    const [schemePreview, setSchemePreview] = useState(null);

    useEffect(() => {
        generateSchemePreview();
    }, [colors]);

    const handleRandomize = () => {
        setColors(Array.from({ length: 6 }, () => Math.random().toString(16).substr(-6)));
    };

    const handleHover = () => {
        setClickState("true");
    };

    const resetClick = () => {
        setClickState("false");
    };

    const snapClick = () => {
        setClickState("snap");
    };

    const handleChangeColor = (index, value) => {
        const newColors = [...colors];
        newColors[index] = value.length === 6 ? value : value.substr(1);
        setColors(newColors);
    };

    const RGBColors = colors.map(color => RGBextract(hexRgb(`#${color}`, { format: 'css' })));

    const generateSchemePreview = () => {
        const complementaryColor = (parseInt(colors[0], 16) ^ 0xFFFFFF).toString(16).padStart(6, '0');
        setSchemePreview(complementaryColor);
    };

    return (
        <div className="main">
            <div className="bar">
                <div className="rectangle0">
                    <div className="cc">colourCorrect</div>
                </div>

                <div className="frame1">
                    <div className="group1">
                        <div className="group3">
                            <button className="rectangle3" onClick={handleRandomize} onMouseEnter={handleHover} onMouseLeave={resetClick}>RANDOMIZE</button>
                            <button className="rectangle" onMouseEnter={handleHover} onMouseLeave={resetClick}>REFRESH</button>
                            <button className="rectangle2" onMouseEnter={snapClick} onMouseLeave={resetClick}>SNAP</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="palette">
                {colors.map((color, index) => (
                    <div key={index}>
                        <input type="color" className={`box${index + 1}`} value={`#${color}`} onChange={(e) => handleChangeColor(index, e.target.value)} />
                        <label className={`label${index + 1}`}>#{color}</label>
                        <input type="text" className={`text${index + 1}`} value={color} onChange={(e) => {if(e.target.value.length===6)handleChangeColor(e.target.value)}}/>
                    </div>
                ))}
            </div>

            <div className="scheme-preview">
                <div className="preview-box" style={{ backgroundColor: `#${schemePreview}` }}></div>
                <p>Complementary Color Preview</p>
            </div>

            <div className="p5js">
                <P5Sketch data={RGBColors} clickstat={clickState} />
            </div>
        </div>
    );
}

export default Cpicker;

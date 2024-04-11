import Sketch from "react-p5";
import React from "react";

const P5Sketch2 = (props) => {
const {data,clickstat} = props;                         //props from main component

const setup = (p5,canvasParentRef) => {                     //canvas setup
  p5.createCanvas(578, 600).parent(canvasParentRef);

  p5.stroke(100); //colormode seed
  p5.colorMode(p5.RGB); //colormode select
}

const draw = (p5)=> { 

   var l = 600/6;
    p5.fill(data[0][0],data[0][1],data[0][2]);            //colour seed
    p5.rect(0,0,578,600/6)
    p5.fill(data[1][0],data[1][1],data[1][2]);
    p5.rect(0,0+l,578,600/6);
    p5.fill(data[2][0],data[2][1],data[2][2]);
    p5.rect(0,2*l,578,600/6);
    p5.fill(data[3][0],data[3][1],data[3][2]);
    p5.rect(0,3*l,578,600/6);
    p5.fill(data[4][0],data[4][1],data[4][2]);
    p5.rect(0,4*l,578,600/6);
    p5.fill(data[5][0],data[5][1],data[5][2]);
    p5.rect(0,5*l,578,600/6);
    
  }

  function mp (p5){                                         
    if(clickstat==="true"){                                 //randomise/refresh button is pressed   
    p5.clear();
    p5.noiseSeed(p5.millis());
    p5.redraw(); 
  }
  if(clickstat==="snap"){                                   //check if screenshot is pressed
    p5.noLoop();
    p5.saveCanvas();
    setTimeout(() => {
      p5.loop()}, 500);
  }}

return (                                                  //p5 component call
    <Sketch setup={setup} draw={draw} data={data} mousePressed={p5 => mp(p5)}/>
)  
}
export default P5Sketch2;
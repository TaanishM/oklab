import Sketch from "react-p5";
import React from "react";

const P5Grad = (props) => {
const {data,hexdata, clickstat} = props;                         //props from main component

const setup = (p5,canvasParentRef) => {                     //canvas setup
  p5.createCanvas(578, 600).parent(canvasParentRef);

  p5.stroke(100); //colormode seed
  p5.colorMode(p5.RGB); //colormode select
  p5.textFont('Impact');
  p5.textSize(24);
}

const draw = (p5)=> { 

    p5.noStroke();
    var l = 600/6;

    p5.fill(data[0][0],data[0][1],data[0][2]);            //colour seed
    p5.rect(0,0,578,l);                                   //draw rectangle with colour seed
    p5.fill('black');
    p5.text(hexdata[0],5,30);

    p5.fill(data[1][0],data[1][1],data[1][2]);
    p5.rect(0,0+l,578,l);
    p5.fill('black');
    p5.text(hexdata[1],5,130);

    p5.fill(data[2][0],data[2][1],data[2][2]);
    p5.rect(0,2*l,578,l);
    p5.fill('black');
    p5.text(hexdata[2],5,230);

    p5.fill(data[3][0],data[3][1],data[3][2]);
    p5.rect(0,3*l,578,l);
    p5.fill('black');
    p5.text(hexdata[3],5,330);

    p5.fill(data[4][0],data[4][1],data[4][2]);
    p5.rect(0,4*l,578,l);
    p5.fill('black');
    p5.text(hexdata[4],5,430);

    p5.fill(data[5][0],data[5][1],data[5][2]);
    p5.rect(0,5*l,578,l);
    p5.fill('black');
    p5.text(hexdata[5],5,530);
    
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
    <Sketch setup={setup} draw={draw} data={data} hexdata={hexdata} mousePressed={p5 => mp(p5)}/>
)  
}
export default P5Grad;
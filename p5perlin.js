import Sketch from "react-p5";
import React,{useState} from "react";

const P5Perlin = (props) => {
  const {data,clickstat} = props;                         //props from main component
  const [particles, setParticles] = useState(             //particle state init

    Array.from({ length: 1000 }, () => ({

      x:0,

      y:0,

      z:0,

    }))

  );

const num = 100;                                            //number of particles on screen
const scaleFactor = 0.001;                                  //noise scaling
const speed = 0.4;                                          //base speed

const [slider, setSlider] = useState(null);                 //slider state init

const setup = (p5,canvasParentRef) => {                     //canvas setup
  p5.createCanvas(578, 600).parent(canvasParentRef);

  p5.stroke(100); //colormode seed
  p5.colorMode(p5.RGB); //colormode select
  for (let i = 0; i < num; i++) {                           //initial position seed
    let x = p5.random(p5.width);
    let y = p5.random(p5.height);
    let z = p5.random(5);
    particles[i] = { x, y, z };
  }
      
  const localSlider = p5.createSlider(0, 32, 1, 1);         //slider initialisation
  localSlider.position(1360, 157);
  localSlider.size(100);
  localSlider.style("transform", "rotate(270deg)");
  setSlider(localSlider);
  p5.slider = localSlider;
  p5.slider.input(() => {
    p5.clear();
    p5.redraw();
  });
}

const draw = (p5)=> {
  let g = slider.value();                                   //slider value storage

  for (let i = 0; i < num; i++) {                           //particle draw
    let p = particles[i];
    p5.strokeWeight(p.z);
    p5.point(p.x, p.y);

    let n = p5.noise(p.x * scaleFactor, p.y * scaleFactor); //perlin noise seed
  
    let a = g * 2 * 3.14 * n;                               //noise scaler linked to slider

    p.x += Math.cos(a) * speed;                             //left bias to prevent clumpin
    p.y += Math.sin(a) * speed;
    
   
    p5.stroke(data[0][0],data[0][1],data[0][2]);            //colour seed
    p5.point(p.x+10,p.y+10);
    p5.stroke(data[1][0],data[1][1],data[1][2]);
    p5.point(p.x+20,p.y+20);
    p5.stroke(data[2][0],data[2][1],data[2][2]);
    p5.point(p.x+30,p.y+30);
    p5.stroke(data[3][0],data[3][1],data[3][2]);
    p5.point(p.x+40,p.y+40);
    p5.stroke(data[4][0],data[4][1],data[4][2]);
    p5.point(p.x+50,p.y+50);
    p5.stroke(data[5][0],data[5][1],data[5][2]);

    p.x += Math.cos(a) * (i % 2 ? 1 : -1);                  //shift bias to left/right up/down
    p.y += Math.sin(a) * (i % 2 ? 1 : -1);

    if (!onScreen({ x: p.x, y: p.y }, p5)) {                //re-render trigger

      p.x = p5.random(p5.width);

      p.y = p5.random(p5.height);

    }
    
  }
}

function onScreen(v,p5) {                                   //checks if particles reach end of screen              
    return v.x >= 0 && v.x <= p5.width && v.y >= 0 && v.y <= p5.height;
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
  }
}
  return (                                                  //p5 component call
    <Sketch setup={setup} draw={draw} data={data} mousePressed={p5 => mp(p5)}/>
)  
}

export default P5Perlin;
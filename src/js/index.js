//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let numberOne = 0;
let numberTwo = 0;
let numberThree = 0;
let numberFour = 0;
let numberFive = 0;
let numberSix = 0;

setInterval(function counter() {
    numberOne++
    if (numberOne > 9) {
        numberTwo++;
        numberOne = 0;
    }
    if (numberTwo > 5) {
        numberThree++;
        numberTwo = 0;
    }
    if (numberThree > 9) {
        numberFour++;
        numberThree = 0;
    }
    if (numberFour > 5) {
        numberFive++;
        numberFour = 0;
    }
    if (numberFive > 9) {
        numberSix++;
        numberFive = 0;
    }
    if (numberSix > 9) {
        numberSix++;
    }

    ReactDOM.render(<Home numberOne={numberOne}
        numberTwo={numberTwo}
        numberThree={numberThree}
        numberFour={numberFour}
        numberFive={numberFive}
        numberSix={numberSix} />, document.querySelector("#app"));
        
    console.log(numberSix, numberFive, numberFour, numberThree, numberTwo, numberOne)
}, 1000)



//render your react application


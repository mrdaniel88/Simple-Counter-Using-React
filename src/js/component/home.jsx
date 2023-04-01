import React from "react";
import PropTypes from 'prop-types';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const myDivStyle = {
	background: "black",
	height: "75px",
	width: "auto",
	display: "flex",
	flexDirection: "row"
}

const letterStyle = {
	color: "white",
	marginLeft: "50px",
	fontSize: "50px",
}
const Home = (props) => {
	return (
		<div style={myDivStyle}>
			<div style={letterStyle}><i className="fa-regular fa-clock"></i></div>
			<div style={letterStyle} id="numberSix">{props.numberSix}</div>
			<div style={letterStyle} id="numberFive">{props.numberFive}</div>
			<div style={letterStyle} id="numberFour">{props.numberFour}</div>
			<div style={letterStyle} id="numberThree">{props.numberThree}</div>
			<div style={letterStyle} id="numberTwo">{props.numberTwo}</div>
			<div style={letterStyle} id="numberOne">{props.numberOne}</div>
		</div>
	);
};

Home.propTypes = {
	numberOne: PropTypes.number,
	numberTwo: PropTypes.number,
	numberThree: PropTypes.number,
	numberFour: PropTypes.number,
	numberFive: PropTypes.number,
	numberSix: PropTypes.number,
}

export default Home;

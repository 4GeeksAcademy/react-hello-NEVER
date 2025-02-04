import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./NavBar";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer"
//create your first component
const Home = () => {
	return (
		<div> 
			<NavBar/>
			<div className="d-flex justify-content-start align-items-center vh-100 flex-column ps-5 pt-4 pe-5"><Jumbotron /> <Card /> </div> 
			<Footer/>
		</div>
	);
};

export default Home;

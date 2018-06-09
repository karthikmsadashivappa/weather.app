import React from "react";
import Time from './Time'
import '../App.css';

const Header = (props) => (
		<div>
			<header className="top-section">
				<a className="title" href="/"><i className="far fa-sun"></i>Weather<span>Track</span></a>
				<Time />
			</header>
		</div>
);

export default Header;
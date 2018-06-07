import React from 'react';

const Footer = (props) => (
	<footer className="main_footer">
					<p className="footer_logo"><a className="footer-title" href="/"><i className="far fa-sun"></i>Weather<span>Track</span></a> </p>
					<p className="copyright">
						&copy; 2018 WeatherTrack. All Rights Reserved.
					</p>
					<div className="footer_links">
						<a href="/">Terms of Service</a>
						<a href="/">Privacy Policy</a>
					</div>
				</footer>
);

export default Footer;
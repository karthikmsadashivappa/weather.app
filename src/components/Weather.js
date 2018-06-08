import React from "react";

const Weather = (props) => (
	<div className="weather">
		 {props.city && props.country && <p>Location: {props.city}, {props.country} <br/> <i className="fas fa-map-marker-alt fa-size"></i></p> }
	     {props.temperature && <p>Temperature: {props.temperature} <br/><i className="fas fa-thermometer-half fa-size"></i></p>}
	     {props.humidity && <p>Humidity: {props.humidity} <br/><i className="fas fa-tint fa-size"></i></p>}
	     {props.description && <p>Description: {props.description} <br/> <i className="far fa-edit fa-size"></i></p>}
	     {props.error && <p>{props.error} <br/> <i className="fas fa-exclamation-circle fa-size"></i></p>}
	  </div>
)

export default Weather;
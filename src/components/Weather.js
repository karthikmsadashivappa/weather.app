import React from "react";

const Weather = (props) => (
	<div className="weather">
		 {props.city && props.country && <p>Location: {props.city}, {props.country} <br/> <i className="fas fa-map-marker-alt"></i></p> }
	     {props.temperature && <p>Temperature: {props.temperature} <br/><i className="fas fa-thermometer-half"></i></p>}
	     {props.humidity && <p>Humidity: {props.humidity} <br/><i className="fas fa-tint"></i></p>}
	     {props.description && <p>Description: {props.description} <br/> <i className="far fa-edit"></i></p>}
	     {props.error && <p>{props.error} <br/> <i className="fas fa-exclamation-circle"></i></p>}
	  </div>
)

export default Weather;
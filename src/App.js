import React from "react";
import Titles from "./components/Title"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "45decf72ca92022978d10c03858bc9e0";

class App extends React.Component {
	getWeather = async () => {
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
		
		const data = await api_call.json();
	}
	render(){
		return(
      		<div>
				<Titles />
				<Form />
				<Weather />
			</div>
		);
	}
}

export default App;

import React from "react";

const Form = (props) => (
		<form className="main-form"onSubmit={props.getWeather}>
			<p className="form-intro">Type in your region to see it in action:</p>
			<input className="input-form" type="text" name="city" placeholder="City"/>
			<input className="input-form" type="text" name="country" placeholder="Country"/>
			<button className="submit-buttom">Check it</button>
		</form>
	);

export default Form;
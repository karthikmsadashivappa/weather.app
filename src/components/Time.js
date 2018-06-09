import React from "react";

const time = new Date().toLocaleTimeString();


const tick = (props) => {
	return(
		<div>{time}</div>
		);
};

tick()
setInterval(tick, 1000)




export default tick;
import React from 'react';
import '../styleCards.scss'

const CardResgistry = () => {
	return (
		<div className="list">
			<div>
				<span className="textList">09:30</span>
				<img src="assets\icon\more.svg" alt="more"/>
			</div>
			<span className="nameRegistry">Tangara desmaresti</span>
			<span className="textRegistry">A - B - C - D - E - F</span>
		</div>
	);
}

export default CardResgistry;

// import { IonIcon } from '@ionic/react';
import React, { Component } from 'react';
import './style.css'

interface props {
	lista: any
}

class Lista extends Component<props> {

	render() {
		return (
			<div className="list">
				<div>
					<span className="titleList">
						{this.props.lista.nome}
					</span>
					<img src="assets\icon\more.svg" alt="more"/>
				</div>
				<div>
					<span className="textList">
						{`Criado em ${this.props.lista.data} as ${this.props.lista.hora}`}
					</span>
				</div>
				<div className="info">
					<div className="infoList">
						<img src="assets/icon/bird.svg" className="iconList" alt="bird"/>
						<span className="textInfo textList">{this.props.lista.registros} registros</span>
					</div>
					<div className="infoList">
						<span className="textInfo textList">{this.props.lista.local}</span>
						<img src="assets/icon/local.svg" className="iconList" alt="location"/>
					</div>
				</div>
			</div>
		);
	}
};

export default Lista;

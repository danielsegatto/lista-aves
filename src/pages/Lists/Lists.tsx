import {
  IonContent,
  IonPage,
  IonIcon  } from '@ionic/react';
import React, { Component } from 'react';
import './style.css'
import Lista from '../../components/CardList/CardList'

interface RouteComponentProps {
  history: any
}

class Listas extends Component<RouteComponentProps> {
  	state = {
    	listas: [
			{
				nome: "D01",
				data: "14/09/2019",
				hora: "13:46",
				registros: "23",
				local: "Três Lagoas"
			},
			{
				nome: "D02",
				data: "12/09/2019",
				hora: "10:50",
				registros: "14",
				local: "Três Lagoas"
			},
			{
				nome: "D03",
				data: "09/09/2019",
				hora: "11:00",
				registros: "30",
				local: "Três Lagoas"
			},
			{
				nome: "E01",
				data: "14/09/2019",
				hora: "14:20",
				registros: "40",
				local: "São Paulo"
			},
			{
				nome: "E03",
				data: "10/09/2019",
				hora: "12:30",
				registros: "12",
				local: "São Paulo"
			},
			{
				nome: "F01",
				data: "20/08/2019",
				hora: "07:30",
				registros: "40",
				local: "Linhares"
			},
			{
				nome: "F02",
				data: "20/08/2019",
				hora: "07:30",
				registros: "40",
				local: "Linhares"
			}

		]
	}

	animationHeader(currentY: number) {
		let divHeader = document.getElementsByClassName('divHeader') as HTMLCollectionOf<HTMLElement>
		if (currentY > 5) {
			divHeader[0].className = 'divHeader divHeaderAnimate'
			divHeader[0].children[0].className = 'iconHeader md hydrated itensHeaderAnimate1'
			divHeader[0].children[1].className = 'titleListas itensHeaderAnimate1'
			divHeader[0].children[2].className = 'iconHeader md hydrated itensHeaderAnimate1'
		}
		else {
			divHeader[0].className = 'divHeader'
			divHeader[0].children[0].className = 'iconHeader md hydrated'
			divHeader[0].children[1].className = 'titleListas'
			divHeader[0].children[2].className = 'iconHeader md hydrated'
		}
	}

	render() {
		return (
			<IonPage>
					<IonContent
						color="light"
						scrollEvents={true}
						onIonScroll={(e) => this.animationHeader(e.detail.currentY)}
					>
						<div className="divHeader">
							<IonIcon name="menu" className="iconHeader"></IonIcon>
							<span className="titleListas">Listas</span>
							<IonIcon name="search" className="iconHeader"></IonIcon>
						</div>
						<div className="listas">
							{this.state.listas.map(lista => <Lista key={lista.nome + lista.data} lista={lista} />)}
						</div>
					</IonContent>
			</IonPage>
			);
		}
};

export default Listas;

import {
  IonContent,
  IonPage,
  IonIcon  } from '@ionic/react';
import React, { Component } from 'react';
import './style.css'
import Lista from '../../components/Lista/Lista'

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
			}
    	]
  	}

  render() {
    return (
      <IonPage>
			<IonContent color="light">
				<div className="divHeader">
					<IonIcon name="menu" className="iconHeader"></IonIcon>
					<h1 className="titleListas">Listas</h1>
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

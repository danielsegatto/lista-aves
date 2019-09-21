import React, {Component} from 'react';
import { IonMenuButton, IonPage, IonContent, IonIcon } from "@ionic/react";

import './Lists.scss'
import CardList from '../components/CardList/CardList'
import SideMenu from '../components/SlideMenu/SideMenu'

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
		 let itensList = divHeader[0].children as HTMLCollectionOf<HTMLElement>
		 if (currentY > 5) {
			 divHeader[0].className = 'divHeader divHeaderAnimate'
		 }
		 else {
			 divHeader[0].className = 'divHeader'
		 }
		 if (currentY >= 42) {
			 itensList[0].style.opacity = '0'
			 itensList[1].style.opacity = '0'
			 itensList[2].style.opacity = '0'
		 }
		 else {
			 itensList[0].style.opacity = '1'
			 itensList[1].style.opacity = '1'
			 itensList[2].style.opacity = '1'
		 }
	 }

	 render() {
		 return (
			 <IonPage>
				 	<SideMenu></SideMenu>
					 <IonContent
						 color="light"
						 scrollEvents={true}
						 onIonScroll={(e: any) => this.animationHeader(e.detail.currentY)}
					 >
						 <div className="divHeader">
							 <IonMenuButton padding-bottom padding-right	 className="iconHeader"></IonMenuButton>
							 <span className="titleListas">Listas</span>
							 <IonIcon name="search" className="iconHeader"></IonIcon>
						 </div>
						 <div className="listas">
							 {this.state.listas.map(lista => <CardList key={lista.nome + lista.data} lista={lista} />)}
						 </div>
					 </IonContent>
			 </IonPage>
			 );
		 }
 };

 export default Listas;

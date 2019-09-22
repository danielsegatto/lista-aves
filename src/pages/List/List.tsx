import React, { Component } from 'react';
import { IonPage, IonContent, IonIcon } from "@ionic/react";
import '../../theme/style.scss'
import { Link } from 'react-router-dom';
import CardResgistry from '../../components/CardRegistry/CardRegistry';

export default class List extends Component {

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
      }
      else {
         itensList[0].style.opacity = '1'
         itensList[1].style.opacity = '1'
		}
	}

	render(){
		return (
			<IonPage>
					<IonContent
						color="light"
						scrollEvents={true}
						onIonScroll={(e: any) => this.animationHeader(e.detail.currentY)}
					>
						<div className="divHeader">
							<div>
								<Link to="/">
									<IonIcon className="iconHeader" name="arrow-back"></IonIcon>
								</Link>
								<span className="titleListas">{decodeURIComponent(this.props.match.params.lista.split('-')[0])}</span>
								<IonIcon className="iconHeaderHidden" name="arrow-back"></IonIcon>
							</div>
							<span>32 registros</span>
						</div>
						<div className="listas">
							{
								[1,2,3,4,5,6].map(i => <CardResgistry key={i} />)
							}
						</div>
					</IonContent>
				</IonPage>
		);
	}
}


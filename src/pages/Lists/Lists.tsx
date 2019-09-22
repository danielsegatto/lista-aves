import React, {Component} from 'react';
import { IonContent, IonIcon, IonMenuToggle } from "@ionic/react";

import '../../theme/style.scss'
import CardList from '../../components/CardList/CardList'
import SideMenu from '../../components/SlideMenu/SideMenu'

interface Props {
   history: any
}

interface Lista {
	nome: string,
	data: string,
	hora: string,
	registros: number
	local: string
}

class Listas extends Component<Props, Lista> {
   state = {
      listas: [
         {
            nome: "D01",
            data: "14/09/2019",
            hora: "13:46",
            registros: 23,
            local: "Três Lagoas"
         },
         {
            nome: "D02",
            data: "12/09/2019",
            hora: "10:50",
            registros: 14,
            local: "Três Lagoas"
         },
         {
            nome: "D03",
            data: "09/09/2019",
            hora: "11:00",
            registros: 30,
            local: "Três Lagoas"
         },
         {
            nome: "E01",
            data: "14/09/2019",
            hora: "14:20",
            registros: 40,
            local: "São Paulo"
         },
         {
            nome: "E03",
            data: "10/09/2019",
            hora: "12:30",
            registros: 12,
            local: "São Paulo"
         },
         {
            nome: "F01",
            data: "20/08/2019",
            hora: "07:30",
            registros: 40,
            local: "Linhares"
         },
         {
            nome: "F02",
            data: "20/08/2019",
            hora: "07:30",
            registros: 40,
            local: "Linhares"
         }

      ]
   }

   animationHeader(currentY: number) {
      let divHeader = document.getElementsByClassName('divHeader') as HTMLCollectionOf<HTMLElement>
      let itensList = divHeader[0].children[0].children as HTMLCollectionOf<HTMLElement>
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

	clickList(lista: Lista) {
		this.props.history.push(`/lista/${lista.nome}-${encodeURIComponent(lista.data)}`, )
	}

	render() {
		return (
			<>
				<SideMenu></SideMenu>
				<IonContent
					color="light"
					scrollEvents={true}
					onIonScroll={(e: any) => this.animationHeader(e.detail.currentY)}
				>
					<div className="divHeader">
							<div>
								<IonMenuToggle>
									<IonIcon name="menu" className="iconHeader"></IonIcon>
								</IonMenuToggle>
								<span className="titleListas">Listas</span>
								<IonIcon className="iconHeader" name="search"></IonIcon>
							</div>
							<span>{this.state.listas.length} listas</span>
						</div>
					<div className="listas">
						{
							this.state.listas.map(lista => (
								<CardList
									key={lista.nome + lista.data}
									lista={lista}
									click={() => {this.clickList(lista)}}
								/>
							))
						}
					</div>
				</IonContent>
			</>
		);
	}
};

 export default Listas;

import React, { useState, useEffect } from 'react';
import { IonContent, IonIcon, IonMenuToggle } from "@ionic/react";

import '../style.scss'
import CardList from '../../components/CardList/CardList'
import SideMenu from '../../components/SlideMenu/SideMenu'

interface Lista {
	nome: string,
	data: string,
	hora: string,
	registros: number
	local: string
}

export default function Listas(props: any)  {

	const [listas, setListas]: any = useState([])

	useEffect(() => {
		setListas(JSON.parse(localStorage.getItem('listas') as string))
	}, [])

   function animationHeader(currentY: number) {
      let divHeader = document.getElementsByClassName('divHeader') as HTMLCollectionOf<HTMLElement>

		if (currentY > 5) {
         divHeader[0].className = 'divHeader divHeaderAnimate'
      }
      else if (divHeader[0].className === 'divHeader divHeaderAnimate'){
         divHeader[0].className = 'divHeader divHeaderAnimate2'
		}

      if (currentY >= 62) {
			let div = divHeader[0].children[0] as HTMLElement
			let span = divHeader[0].children[1] as HTMLElement
			div.style.opacity = '0'
			span.style.opacity = '0'
      }
      else {
			let div = divHeader[0].children[0] as HTMLElement
			let span = divHeader[0].children[1] as HTMLElement
			div.style.opacity = '1'
			span.style.opacity = '1'
		}
	}

	function clickList(lista: Lista) {
		props.history.push(`/lista/${lista.nome}-${encodeURIComponent(lista.data)}`, )
	}

	return (
		<>
			<SideMenu></SideMenu>
			<IonContent
				color="light"
				scrollEvents={true}
				onIonScroll={(e: any) => animationHeader(e.detail.currentY)}
			>
				<div className="divHeader">
					<div>
						<IonMenuToggle><IonIcon name="menu" className="iconHeader"></IonIcon></IonMenuToggle>
						<span className="titleListas">Listas</span>
						<IonIcon className="iconHeader" name="search"></IonIcon>
					</div>
					<span>{listas.length} listas</span>
				</div>
				<div className="listas">
					{
						listas.map((lista: Lista) => (
							<CardList
								key={lista.nome + lista.data}
								lista={lista}
								click={() => clickList(lista)}
							/>
						))
					}
				</div>
			</IonContent>
		</>
	);
}

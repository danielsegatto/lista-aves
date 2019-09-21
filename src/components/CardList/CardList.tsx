import React from 'react';
import './CardList.scss'

// interface Props {
// 	lista: {
// 		nome: string
// 		data: string
// 		hora: string
// 		registros: number
// 		local: string
// 	}
// }

const CardList = (props: any) => {
	return (
		<div className="list">
			<div>
				<span className="titleList">
					{props.lista.nome}
				</span>
				<img src="assets\icon\more.svg" alt="more"/>
			</div>
			<div>
				<span className="textList">
					{`Criado em ${props.lista.data} as ${props.lista.hora}`}
				</span>
			</div>
			<div className="info">
				<div className="infoList">
					<img src="assets/icon/bird.svg" className="iconList" alt="bird"/>
					<span className="textInfo textList">{props.lista.registros} registros</span>
				</div>
				<div className="infoList">
					<span className="textInfo textList">{props.lista.local}</span>
					<img src="assets/icon/local.svg" className="iconList" alt="location"/>
				</div>
			</div>
		</div>
	);
}

export default CardList;

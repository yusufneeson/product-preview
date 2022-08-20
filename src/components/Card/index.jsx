import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardFoot from "./CardFoot";
import style from "./card.module.css";

function Card() {
	return (
		<div className={style.container}>
			<div className={style.card}>
				<CardHead />
				<CardBody />
				<CardFoot />
			</div>
		</div>
	);
}

export default Card;

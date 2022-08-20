import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardFoot from "./CardFoot";
import style from "./card.module.css";

function Card() {
	return (
		<div className={style.card}>
			<CardHead />
			<CardBody />
			<CardFoot />
		</div>
	);
}

export default Card;

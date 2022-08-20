import CardImage from "../CardImage";
import Card from "../Card";
import style from "./box.module.css";

function Box() {
	return (
		<div className={style.box}>
			<CardImage />
			<Card />
		</div>
	);
}

export default Box;

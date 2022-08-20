import style from "./cardhead.module.css";

function CardHead() {
	return (
		<div>
			<p className={style.subtitle}>PARFUME</p>
			<h1 className={style.title}>Gabrielle Essence Eau De Parfum</h1>
		</div>
	);
}

export default CardHead;

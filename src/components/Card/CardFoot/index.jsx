import style from "./cardfoot.module.css";

function CardFoot() {
	return (
		<div className={style.cardfoot}>
			<span className={style.price}>$149.99</span>
			<s className={style.discounted}>$169.99</s>
		</div>
	);
}

export default CardFoot;

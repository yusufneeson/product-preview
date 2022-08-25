import Image from "next/future/image";
import style from "./cardimage.module.css";

function CardImage() {
	return (
		<div className={style.cardimage}>
			<Image
				src="/images/image-product-desktop.jpg"
				width={302}
				height={500}
			/>
		</div>
	);
}

export default CardImage;

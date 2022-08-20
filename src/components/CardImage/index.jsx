import Image from "next/future/image";
import style from "./cardimage.module.css";

function CardImage() {
	return (
		<div className={style.cardimage}>
			<Image
				src="/images/image-product-desktop.jpg"
				width={301}
				height={452}
			/>
		</div>
	);
}

export default CardImage;

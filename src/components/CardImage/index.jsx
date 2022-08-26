import Image from "next/future/image";
import { useEffect, useState } from "react";
import style from "./cardimage.module.css";

function CardImage() {
	const [width, setWidth] = useState(0);

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	return (
		<div className={style.cardimage}>
			{width > 626 ? (
				<Image
					src="/images/image-product-desktop.jpg"
					width={302}
					height={500}
					priority={true}
					alt="Yusuf Neeson - Frontendmentor Product Preview"
				/>
			) : (
				<Image
					src="/images/image-product-mobile.jpg"
					width={345}
					height={241}
					priority={true}
					alt="Yusuf Neeson - Frontendmentor Product Preview"
				/>
			)}
		</div>
	);
}

export default CardImage;

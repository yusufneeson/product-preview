import Image from "next/future/image";

function CardImage() {
	return (
		<div>
			<Image
				src="/images/image-product-desktop.jpg"
				width={100}
				height={100}
			/>
		</div>
	);
}

export default CardImage;

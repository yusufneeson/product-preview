import style from "./button.module.css";

function Button(props) {
	const { icon, text } = props;
	return (
		<div>
			<a className={style.button} href="#">
				<span className={style.icon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="16"
					>
						<path
							fill="#FFF"
							d="M14.383 10.388a2.397 2.397 0 00-1.518-2.222l1.494-5.593a.8.8 0 00-.144-.695.8.8 0 00-.631-.28H2.637L2.373.591A.8.8 0 001.598 0H0v1.598h.983l1.982 7.4a.8.8 0 00.799.59h8.222a.8.8 0 010 1.599H1.598a.8.8 0 100 1.598h.943a2.397 2.397 0 104.507 0h1.885a2.397 2.397 0 104.331-.376 2.397 2.397 0 001.12-2.021zM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991zm-6.465 6.392a.8.8 0 110-1.598.8.8 0 010 1.598zm6.393 0a.8.8 0 110-1.598.8.8 0 010 1.598z"
						></path>
					</svg>
				</span>
				<span className={style.text}>{text}</span>
			</a>
		</div>
	);
}

export default Button;

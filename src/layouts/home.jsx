import Author from "../components/author/author";
import style from "./home.module.css";

function Home({ children }) {
	return (
		<div className={style.home}>
			{children}
			<Author />
		</div>
	);
}

export default Home;

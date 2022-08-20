import style from "./home.module.css";

function Home({ children }) {
	return <div className={style.home}>{children}</div>;
}

export default Home;

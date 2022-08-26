import Box from "../components/Box";
import Home from "../layouts/home";
import Head from "next/head";

export default function Index() {
	return (
		<>
			<Head>
				<title>Product Preview</title>
			</Head>
			<Home>
				<Box />
			</Home>
		</>
	);
}

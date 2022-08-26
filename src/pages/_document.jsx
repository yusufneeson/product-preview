import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="id">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap"
					rel="stylesheet"
				/>
				<meta name="application-name" content="Yusuf Neeson" />
				<meta name="msapplication-TileColor" content="#2e3440" />
				<meta name="theme-color" content="#2e3440" />
				<meta
					content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
					name="robots"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

// _document: Allows us directly access to head and all of the html documents Direct access to html document
// This is used to modify all pages inside the application

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="This is Keaton Gallagher's portfolio" content="A Site fro my programming portfolio." />
					<meta charSet="utf-8" />
					{/* This is for google primarly */}
					<meta name="robots" />
					{/* Mobile phones making width the size of the device */}
					<meta name="viewport" content="width=device-width" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					/>
					<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
						integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
						crossorigin="anonymous"
					/>
					<script
						src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
						integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
						crossorigin="anonymous"
					/>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
						integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
						crossorigin="anonymous"
					/>

				</body>
				<style jsx global>
					{`
						body {
							font-family: 'Roboto', sans-serif;
						}
					`}
				</style>
			</html>
		);
	}
}

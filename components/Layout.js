import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ children, title, description, backButton }) => {
	return (
		<div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
			<div >
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
        {backButton && <span onClick={() => Router.back()} className="back-button">&#x2b05;</span>}
					<Link href="/">
						<a className="navbar-brand">Hacker Next</a>
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
					</div>
				</nav>
				{children}
			</div>
      <style jsx>{`
        .back-button {
          font-size:0.9rem;
          padding-right:1em;
          cursor:pointer;
        }
        .back-button:hover {
          color: darkblue;
        }
        
        `}</style>
		</div>
	);
};

export default Layout;

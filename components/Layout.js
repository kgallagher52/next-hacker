import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title,description }) => {
	return (
		<div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Head>
			<div >
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link href="/">
									<a className="nav-link">
										Home <span className="sr-only">(current)</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link">Features</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link">Pricing</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				{children}
			</div>
		</div>
	);
};

export default Layout;

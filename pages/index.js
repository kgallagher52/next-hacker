import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';
import Link from 'next/link';

const Index = ({ stories, page }) => {
	return stories.length === 0 ? (
		<Layout title={'Error'}>
			<Error statusCode={503} />
		</Layout>
	) : (
		<Layout title={'Stories'} description="A Hacker News clone made with Next.js and Bootstrap.">
			<header>
				<h1>Stories</h1>
				<nav aria-label="...">
					<ul className="pagination">
						<li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
							<Link href={`/?page=${page - 1}`}>
								<a className="page-link">Previous</a>
							</Link>
						</li>
						<li className="page-item">
							<Link href={`/?page=${page}`}>
								<a className="page-link">{page}</a>
							</Link>
						</li>
						<li className="page-item">
							<Link href={`/?page=${page + 1}`}>
								<a className="page-link">Next</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<StoryList stories={stories} />
			<footer>Ultron Creative &copy; {new Date().getFullYear()} </footer>
			<style jsx>
				{`
					header {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						width: 100%;
					}
					footer {
						text-align: center;
						margin: 24px;
					}
				`}
			</style>
		</Layout>
	);
};

Index.getInitialProps = async ({ req, res, query }) => {
	//Context gives you  information about the server call, req,query, res etc...
	let stories;
	let page;
	try {
		page = Number(query.page) || 1;
		const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
		stories = await response.json();
	} catch (err) {
		console.error(err);
		stories = [];
	}
	return { stories, page };
};

export default Index;

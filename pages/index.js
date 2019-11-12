import fetch from 'isomorphic-fetch';
import Error from 'next/error';

const Index = ({ stories }) => {
	return stories.length === 0 ? (
		<Error statusCode={503} />
	) : (
		<div>
			<h1>Hacker Next </h1>
			{stories.map((s) => <h2 key={s.id}>{s.title}</h2>)}
		</div>
	);
};

Index.getInitialProps = async (context) => {
  let stories;
	try {
    var res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
    stories = await res.json()
	} catch (err) {
		console.error(err);
		stories = [];
  }
	return { stories };
};

export default Index;

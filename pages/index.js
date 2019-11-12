import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoryList from '../components/StoryList';


const Index = ({ stories }) => {
	return stories.length === 0 ? (
		<Error statusCode={503} />
	) : (
    <StoryList stories={stories}/>
	);
};

Index.getInitialProps = async () => {
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

import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';


const Index = ({ stories }) => {
	return stories.length === 0 ? (
    <Layout title={"Error"}>
		<Error statusCode={503} />
    </Layout>
	) : (
    <Layout title={"Stories"} description="A Hacker News clone made with Next.js and Bootstrap.">
      <StoryList stories={stories}/>
    </Layout>
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

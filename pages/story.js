import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import CommentList from '../components/CommentList';

const Story = ({ story }) => {
	return !story ? (
		<Error statusCode={503} />
	) : (
		<Layout title={story.title} backButton={true}>
			<div className="jumbotron">
				<h1 className="display-4">{story.user}</h1>
				<p className="lead">{story.title}</p>
        <strong>{story.points} Points</strong>
        <strong>{story.comments_count} Comments</strong>
        <strong>{story.time_ago}</strong>
				<hr className="my-4" />
        {story.comments.length > 0 ? (
          <CommentList comments={story.comments}/>
        ):<div>No Comments</div>}
				<a className="btn btn-primary btn-lg" target="_blank" href={story.url} role="button">
					Learn more
				</a>
			</div>
			<style jsx>
				{`
					.jumbotron {
						display: flex;
						justify-content: space-between;
						align-items: center;
						flex-flow: row wrap;
					}
					h1,
					.lead {
						width: 100%;
					}
					.card {
						width: 25%;
						max-height: 200px;
						overflow-y: scroll;
						margin: 12px;
					}
          strong {
            margin:8px;
            margin-bottom:24px;
          }
				`}
			</style>
		</Layout>
	);
};

Story.getInitialProps = async ({ query }) => {
	let story;

	try {
		const storyId = query.id;
		var response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
		story = await response.json();
	} catch (err) {
		console.error(err);
		story = null;
	}
	return { story };
};
export default Story;

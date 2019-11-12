import Link from 'next/link';

const StoryList = ({ stories }) => {
	return (
		<div className="story-list">
			<h1>Hacker Next </h1>
			{stories.map((s) => (
				<div className="story" key={s.id}>
					<h2 className="story-title">
						<a href={s.url}>{s.title}</a>
					</h2>
					<div className="story-details">
						<span>{s.points || 0} points</span>
						<Link href={`/story?id=${s.id}`}>
							<a>{s.comments_count || 0} comments</a>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default StoryList;

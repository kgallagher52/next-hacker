import Link from 'next/link';

const StoryList = ({ stories }) => {
	return (
		<div className="story-list">
			<div className="component-header" />
			{stories.map((s) => (
				<div key={s.id} className="card story-card">
					<div className="card-body">
						<h5 className="card-title">
							<a href={s.url}>{s.title}</a>
						</h5>
						<h6 className="card-subtitle mb-2 text-muted">User: {s.user}</h6>
						<p className="card-text">{s.points || 0} points</p>
						<Link href={`/story?id=${s.id}`}>
							<a className="card-link">{s.comments_count || 0} comments</a>
						</Link>
					</div>
				</div>
			))}
			<style jsx>
				{`
					.story-list {
						display: flex;
						justify-content:center;
						align-items: center;
						flex-flow: row wrap;
						width: 100%;
						background: #f3f3f3;
					}
					h1 {
						width: 100%;
						text-align: center;
						margin: 12px;
					}

					a {
						color: darkblue;
						font-weight: 700;
					}
					.story-card {
						width: 350px;
						height: 250px;
						overflow-y: scroll;
						margin: 12px;
						-webkit-box-shadow: 0 10px 6px -6px #777;
						-moz-box-shadow: 0 10px 6px -6px #777;
						box-shadow: 0 10px 6px -6px #777;
					}
				`}
			</style>
		</div>
	);
};

export default StoryList;

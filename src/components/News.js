import React from "react";
import Markdown from "react-markdown";
import Moment from "react-moment";

class Item extends React.Component {
	constructor(props) {
		super(props);

		this.title = props.title;
		this.date = props.date;
		this.author = props.author ? `@${props.author}` : "Administrator";
		this.content = props.content;
		this.discordChannel = props.discordChannel ? `#${props.discordChannel}` : null;
	}

	render() {
		return (
			<div>
				<div className="card rounded bg-black-30">
					<div className="card-header d-flex flex-wrap justify-content-between">
						<span className="flex-grow-1 fw-bold">{this.title}</span>
						<Moment format="D MMMM[,] hh:mma">{this.date}</Moment>
					</div>
					<div className="card-body markdown">
						<Markdown>{this.content}</Markdown>
						<div><span className="user">{this.author}</span>{this.discordChannel != null && <> in <span className="user">{this.discordChannel}</span></>}</div>
						<div><Moment className="fst-italic" fromNow>{this.date}</Moment></div>
					</div>
				</div>
			</div>
		)
	}
}

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			hide: false
		}
	}

	async componentDidMount() {
		try {
			let data = await fetch("https://purrramid.github.io/news/news.json").then(d => d.text());

			this.setState({
				items: JSON.parse(data).sort((a, b) => (new Date(a).getTime() - new Date(b).getTime()))
			});
		} catch (e) {
			console.warn("Could not fetch content. Hiding News component.");
			this.setState({ hide: true });
		}
	}

	render() {
		if (this.state.hide) return null;

		return (
			<div className="my-3">
				<h2 id="news">News</h2>
				<p>The latest news from the admins of The Purrramid itself.</p>
				<div className="p-relative overflow-x-hidden">
					<div className="d-grid grid-3">
						{/* Only show 3 at a time. */}
						{this.state.items.slice(0, 3).map((x, i) => <Item key={i} {...x} />)}
						{this.state.items.length === 0 && <div className="spinner-border"/>}
					</div>
				</div>
				<a href="/news" className="more d-block mt-3">Show all</a>
			</div>
		);
	}
}

export default News;

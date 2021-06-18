import React from "react";

class Game extends React.Component {
	name;
	img;
	website;

	constructor(props) {
		super(props);

		this.name = props.name;
		this.img = `https://static-cdn.jtvnw.net/ttv-boxart/${encodeURIComponent(this.name)}-300x400.jpg`;
		this.website = props.href;
	}
	render() {
		return (
			<a rel="noreferrer" href={this.website} target="_blank">
				<img src={this.img} alt={this.name} title={this.name} className="rounded border" draggable={false} />
			</a>
		)
	}
}

class Games extends React.Component {
	render() {
		return (
			<div className="my-3">
				<h2 id="games">Games</h2>
				<p>We play a lot of games, and when we say that, we mean it. Here's just a small list of the games we play.</p>
				<games className="d-grid grid-4">
					<Game name="Tom Clancy's Rainbow Six Siege" href="https://rainbow6.com" />
					<Game name="Apex Legends" href="https://apexlegends.com" />
					<Game name="Valheim" href="https://valheimgame.com" />
					<Game name="VALORANT" href="https://playvalorant.com" />
				</games>
			</div>
		);
	}
}

export default Games;

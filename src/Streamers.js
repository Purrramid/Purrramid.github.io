import React from 'react';
import twemoji from 'twemoji';
import './Streamers.css';

class Streamers extends React.Component {
	firebase;

	constructor(props) {
		super(props);

		this.firebase = props.firebase;

		this.state = {
			streamers: {},
			loading: true
		}
	}

	componentDidMount() {
		const headers = {
			'Accept': 'application/vnd.twitchtv.v5+json',
			'Client-ID': 'i2x0iemvdx3sizjg7tz0vg3i6hnx3v'
		}

		this.firebase.then(async data => {
			/** @type {[]} */
			const channels = data.streamers;
			/** @type {[]} */
			const vips = data.vips;

			await fetch(`https://api.twitch.tv/kraken/channels?id=${channels.join(",")}`, { headers })
				.then(r => r.text())
				.then(JSON.parse)
				.then(j => {
					j.channels.forEach(channel => {
						let icon = document.createElement("img");
						icon.src = channel.logo;

						let link = document.createElement("a");
						link.href = channel.url;
						link.appendChild(icon);
						link.target = "_blank";

						this.setState({
							streamers: {
								...this.state.streamers,
								[channel._id]: {
									name: channel.display_name,
									url: channel.url,
									image: channel.logo,
									id: channel._id,
									description: channel.description,
									game: channel.game,
									isLive: false,
									isVIP: vips.includes(channel._id)
								}
							}
						})
					});
				});

			await fetch(`https://api.twitch.tv/kraken/streams/?channel=${channels}`, { headers })
				.then(r => r.text())
				.then(JSON.parse)
				.then(j => {
					j.streams.forEach(stream => {
						this.setState({
							streamers: {
								...this.state.streamers,
								[stream.channel._id]: {
									...this.state.streamers[stream.channel._id],
									isLive: true
								}
							}
						});
					});
				})
				.finally(() => {
					this.setState({
						loading: false
					});
				});
		});
	}

	render() {
		return (
			<main id="description">
				<div className="container mt-5 px-3 text-white">
					<div className="my-3" data-section="streamers">
						<h2>Streamers</h2>
						<p>This is a list of all the amazing streamers in the community!</p>
						<div id="spinner" className="spinner-border" hidden={!this.state.loading}></div>
						<div id="streamers" className="w-100">
							{
								Object.values(this.state.streamers)
									.sort((a, b) => Math.random() > .5 ? 1 : -1)
									.sort((a, b) => a.isLive ? -1 : b.isLive ? 1 : 0)
									.map((stream, i) => (
										<div className={`${stream.isVIP ? 'vip' : ''} ${stream.isLive ? 'live' : ''}`} key={`streamers-${stream.id}`}>
											<img src={stream.image} alt={stream.name} draggable={false} />
											<div>
												<h3>{stream.name}</h3>
												<p dangerouslySetInnerHTML={{ __html: twemoji.parse(stream.description) || "<i>No description provided.</i>" }} />
												<p className="game">Currently live playing <b>{stream.game || "No Game"}</b></p>
												<a target="_blank" rel="noreferrer" href={stream.url} className="btn btn-outline-twitch">Watch on twitch.tv ↗</a>
											</div>
											<div hidden={stream.isLive === false && stream.isVIP === false}>
												<div className="live-txt">LIVE</div>
												<div className="vip-txt">VIP</div>
											</div>
										</div>
									))
							}
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Streamers;

import React from 'react';

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
			const channels = data.vips;
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
									isLive: false
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

			return data;
		});
	}

	render() {

		return (
			<div className="my-3">
				<h2 id="streamers">Streamers</h2>
				<p>Our community consists of a lot of amazing streamers. Below is a list of our VIP streamers.</p>
				<div id="spinner" className="spinner-border" hidden={!this.state.loading}></div>
				<streamers className="w-100 d-grid grid-7">
					{
						Object.values(this.state.streamers)
							.sort((a, b) => Math.random() > .5 ? 1 : -1)
							.sort((a, b) => a.isLive ? -1 : b.isLive ? 1 : 0)
							.map(streamer => (
								<a className={`${streamer.isLive ? 'live' : ''}`} key={`main-streamers-${streamer.id}`} href={streamer.url} target="_blank" rel="noreferrer"><img alt={streamer.name} src={streamer.image} draggable={false} /></a>
							))
					}
				</streamers>
				<a href="#/streamers" className="more d-block mt-3">Show more</a>
			</div>
		)
	}
}

export default Streamers;

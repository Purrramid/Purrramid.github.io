import React from 'react';

class Streamers extends React.Component {
	firebase;

	constructor(props) {
		super(props);
		this.firebase = props.firebase;

		this.state = {
			streamers: [],
			loading: true
		}
	}

	componentDidMount() {
		const headers = {
			'Accept': 'application/vnd.twitchtv.v5+json',
			'Client-ID': 'i2x0iemvdx3sizjg7tz0vg3i6hnx3v'
		}

		this.firebase.database().ref("vips").once("value", snap => {
			/** @type {[]} */
			const channels = snap.val();
			fetch(`https://api.twitch.tv/kraken/channels?id=${channels.join(",")}`, { headers })
				.then(r => r.text())
				.then(JSON.parse)
				.then(j => {
					let channelData = {};

					j.channels.forEach(channel => {
						let icon = document.createElement("img");
						icon.src = channel.logo;

						let link = document.createElement("a");
						link.href = channel.url;
						link.appendChild(icon);
						link.target = "_blank";

						channelData[channel._id] = link;
						this.setState({
							streamers: this.state.streamers.concat({
								name: channel.name,
								url: channel.url,
								image: channel.logo
							})
						})
					});

					return channelData;
				})
				// .then(channelData => {
				// 	channelData
				// })
				.finally(() => {
					this.setState({
						loading: false
					})
				});
		});
	}

	render() {
		return (
			<div className="my-3" id="streamers">
				<h2>Streamers</h2>
				<p>Our community consists of a lot of amazing streamers. Below is a list of our VIP streamers.</p>
				<div id="spinner" className="spinner-border" hidden={!this.state.loading}></div>
				<streamers className="w-100 d-grid grid-7">
					{
						this.state.streamers.map((streamer, i) => (
							<a key={i} href={streamer.url} target="_blank" rel="noreferrer"><img alt={streamer.name} src={streamer.image} /></a>
						))
					}
				</streamers>
				<a href="#/streamers" className="more d-block mt-3">Show more</a>
			</div>
		)
	}
}

export default Streamers;

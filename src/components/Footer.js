import React from "react";
import { Link as Jump } from 'react-scroll';

class Footer extends React.Component {
	render() {
		return (
			<footer className="mt-5 py-5 w-100 bg-dark text-white">
				<div className="container">
					<h2>Admins</h2>
					<div className="d-grid grid-3">
						<div>
							<h4><span className="user">@Panash</span></h4>
							<ul>
								<li><a href="https://p4nash.github.io">Website</a></li>
								<li><a href="https://www.youtube.com/channel/UCQKfmsTfUdJZW4EqfsWC2lQ">YouTube</a></li>
								<li><a href="https://twitch.tv/P4NASH">Twitch</a></li>
								<li><a href="https://twitter.com/PanashWasTaken">Twitter</a></li>
							</ul>
						</div>
						<div>
							<h4><span className="user">@vortami</span></h4>
							<ul>
								<li><a href="https://vortami.web.app">Website</a></li>
								<li><a href="https://www.youtube.com/channel/UCkyKacua1ThySkGtI-lF14Q">YouTube</a></li>
								<li><a href="https://twitch.tv/vortami">Twitch</a></li>
								<li><a href="https://twitter.com/vortamiBird">Twitter</a></li>
							</ul>
						</div>
						<div>
							<h4><span className="user">@j_Lloyd_</span></h4>
							<ul>
								<li><a href="http://josephlselby.net/">Website</a></li>
								<li><a href="https://twitch.tv/j_writer_">Twitch</a></li>
								<li><a href="https://twitter.com/JLSelby">Twitter</a></li>
							</ul>
						</div>
					</div>
					<div className="text-center">All images belong to their respective owners.</div>
					<div className="text-center"><a href="https://github.com/Purrramid/Purrramid.github.io" className="text-white text-decoration-none">&lt;&gt; with ♥ by <span className="user">@vortami</span></a></div>
					<div>
						<Jump className="btn float-end text-white" to="description" offset={-999}>Scroll To Top 🠕</Jump>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;

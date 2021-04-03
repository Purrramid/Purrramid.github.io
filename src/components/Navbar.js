import React from "react";
import cats from "../img/cats.png";
import { Link as Jump } from 'react-scroll';

class Navbar extends React.Component {
	offset = -70;

	constructor(props) {
		super(props);
		this.state = {
			top: props.mainSite ? window.scrollY === 0 : false,
			mainSite: this.props.mainSite || false
		};
	}

	componentDidMount() {
		const scrollEvent = _event => {
			this.setState({
				top: this.props.mainSite ? window.scrollY === 0 : false,
				mainSite: this.props.mainSite || false
			});
		}
		window.addEventListener("scroll", scrollEvent);
		window.addEventListener("hashchange", scrollEvent);
	}

	render() {
		return (
			<nav className={`navbar sticky-top shadow ${this.state.top ? 'top' : ''}`}>
				<div className="container d-flex justify-content-between">
					{this.state.mainSite ?
						<Jump className="btn text-white bold" to="description" offset={this.offset}>
							<img src={cats} alt="The Purrramid Icon" />
							<span>The Purrramid</span>
						</Jump>
						:
						<a className="btn text-white bold" href="#/">
							<img src={cats} alt="The Purrramid Icon" />
							<span>The Purrramid</span>
						</a>
					}
					<div hidden={this.state.mainSite === false}>
						<Jump className="btn text-white d-none d-sm-inline-block bold" to="community" offset={this.offset}>Community</Jump>
						<Jump className="btn text-white d-none d-sm-inline-block bold" to="games" offset={this.offset}>Games</Jump>
						<Jump className="btn text-white d-none d-sm-inline-block bold" to="streamers" offset={this.offset}>Streamers</Jump>
						<a className="btn text-white bold" href="https://marty-bot.web.app" id="marty">Marty Bot ↗</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;

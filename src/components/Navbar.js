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
		const scrollEvent = event => {
			this.setState({
				top: this.props.mainSite ? window.scrollY === 0 : false,
				mainSite: this.props.mainSite || false
			});
			if (event.type === "hashchange") {
				window.scrollTo({ top: 0 });
			}
		}
		window.addEventListener("scroll", scrollEvent);
		window.addEventListener("hashchange", scrollEvent);
	}

	render() {
		return (
			<nav className={`navbar sticky-top shadow ${this.state.top ? 'top' : ''}`}>
				<div className="container d-flex justify-content-between">
					{this.state.mainSite ?
						<Jump className="btn text-white bold" to="description" offset={-999}>
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
						<div className="nav-item dropdown">
							{/* eslint-disable-next-line */}
							<a className="nav-link text-white dropdown-toggle d-inline-block d-sm-none" tabIndex="0" role="button" id="navbarScrollingDropdown" data-bs-toggle="dropdown" aria-expanded="false">
								Jump
							</a>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
								<Jump className="dropdown-item" to="community" offset={this.offset}>Community</Jump>
								<Jump className="dropdown-item" to="games" offset={this.offset}>Games</Jump>
								<Jump className="dropdown-item" to="streamers" offset={this.offset}>Streamers</Jump>
								<a className="dropdown-item" href="https://marty-bot.web.app" id="marty">MartyBot ↗</a>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;

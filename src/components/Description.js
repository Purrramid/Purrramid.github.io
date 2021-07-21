import React from "react";
import { Link as Jump } from 'react-scroll';
import { PNG as catsPNG, WebP as catsWebP } from "./img/cats";
class Description extends React.Component {
	offset = -60;

	render() {
		return (
			<div id="description" className="bg-black-30 w-100 text-white">
				<div className="navbar d-flex justify-content-around bold d-block d-sm-none">
					<Jump className="btn text-white" to="community" offset={this.offset}>Community</Jump>
					<Jump className="btn text-white" to="games" offset={this.offset}>Games</Jump>
					<Jump className="btn text-white" to="streamers" offset={this.offset}>Streamers</Jump>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<picture>
								<source srcset={catsWebP[0]} media="(min-width: 576px) and (max-width: 992px)" type="image/webp" />
								<source srcset={catsWebP[1]} type="image/webp" />

								<source srcset={catsPNG[0]} media="(min-width: 576px) and (max-width: 992px)" type="image/png" />
								<source srcset={catsPNG[1]} type="image/png" />

								<img src={catsPNG[1]} alt="Purrramid Icon" id="icon" class="w-100 w-sm-auto" />
							</picture>
						</div>
						<div className="p-5 col-sm-8">
							<h1>We are The Purrramid!</h1>
							<p>The Purrramid is the perfect place to hang out online. We're a community with members all around the world, from San Francisco, USA to Sydney, AU.</p>
							<p>We openly support individuals of any ethnicity, sexuality or gender identity. Any anti-LGBTQIA+, racist, sexist, or other kind of harassment is a big no-no.</p>
							<a className="btn text-white btn-blurple px-4" href="https://discord.gg/y8XHJHAZ5C">Join the Discord!</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Description;

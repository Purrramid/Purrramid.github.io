import React from "react";
import { Link as Jump } from 'react-scroll';

class Community extends React.Component {
	render() {
		return (
			<div className="my-3">
				<h2 id="community">Community</h2>
				<p>We host multiple community-driven events every week! Check them out:</p>
				<div className="d-grid grid-3">
					<div>
						<div className="border rounded bg-black-30">
							<div className="card-header">Movie Night</div>
							<div className="card-body">Every Saturday, in coorperation with <span className="user">@EmHasCats</span> ‘<b>The Scardey Cats</b>’ server, we host a movie night.</div>
						</div>
					</div>
					<div>
						<div className="border rounded bg-black-30">
							<div className="card-header">Game Night</div>
							<div className="card-body">Every night (and sometimes day), we play videogames together! The big game in the community is <b>Rainbow Six Siege</b>, but we do occasionally play other games like <Jump className="text-light" to="#games">these</Jump>.</div>
						</div>
					</div>
					<div>
						<h4>...and more!</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Community;

import React from 'react';

class BLM extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand" style={{ background: 'black', color: 'white' }}>
				<div className="container">
					<div>
						<div className="d-inline-block me-1">Racism is bad for many obvious reasons.</div>
						<a className="text-white d-inline-block" href="https://blacklivesmatter.com">Donate to #BlackLivesMatter.</a>
					</div>
				</div>
			</nav>
		)
	}
}

export default BLM;

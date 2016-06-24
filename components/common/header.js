import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<div className="header container-fluid">
			<nav className="nav">
				<IndexLink to="/" activeClassName="active"><img src="http://cdn.dota2.com/apps/dota2/images/nav/logo.png"/></IndexLink>
				<Link to="/about" activeClassName="active">Heroes</Link>
				<Link to="/course" activeClassName="active">Guides</Link>
			</nav>
		</div>
	);
};




export default Header;
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Topbar = () => {
	return (
		<div className="topbar">
			<a className="hoverBG" id="rightColGetDotaLink" href="http://store.steampowered.com/app/570/"><img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/2014/trans.gif" /></a>
		</div>
	);
};

export default Topbar;
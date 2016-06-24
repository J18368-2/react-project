import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Footer = () => {
	return (
		<div className="footer container-fluid">
			<div className="container">
				<img src="http://media.steampowered.com/apps/dota2/images/blogfiles/valve_logo_footer.png"/>
				<span>© Valve Corporation, all rights reserved. Valve, the Valve logo, Steam, the Steam logo, Source, the Source logo, Valve Source and Dota are trademarks and/or registered trademarks of Valve Corporation. </span>
			</div>
		</div>
	);
};




export default Footer;
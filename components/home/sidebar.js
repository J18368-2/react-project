import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div id="rightColPlayerCount"><div id="rightColPlayerCountNum">13,077,179</div></div>

			<div className="sidebar-battlepass"><a href="http://www.dota2.com/international/battlepass"><img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/2014/trans.gif"/></a></div>
			<div className="sidebar-leaderboard"><a href="http://www.dota2.com/leaderboards/"><img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/2014/trans.gif"/></a></div>
			<div className="sidebar-shanghai-major"><a href="http://www.dota2.com.cn/theshanghaimajor/english/overview"><img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/2014/trans.gif"/></a></div>
			<div className="sidebar-balance-of-power"><a href="http://www.dota2.com/balanceofpower"><img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/2014/trans.gif"/></a></div>
			<div className="sidebar-frankfurt-major"><a href="http://www.thefrankfurtmajor.com/"><img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/2014/trans.gif"/></a></div>
		</div>
	);
};

export default Sidebar;
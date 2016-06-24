import React  from 'react';
import {Link} from 'react-router';
import Sidebar from './sidebar';
import Topbar from './topbar';
class homePage extends React.Component {
	render() {
		return (
			<div className="home">
				<div id="HeaderVideo">
						<video id="ShieldVideo" autoPlay loop poster="http://cdn.dota2.com/apps/dota2/videos/international2016/battlepass_intro_nosound.png">
							<source type="video/webm" src="http://cdn.dota2.com/apps/dota2/videos/international2016/battlepass_intro_nosound.webm"/>
							<source type="video/mp4" src="http://cdn.dota2.com/apps/dota2/videos/international2016/battlepass_intro_nosound.mp4"/>
						</video>
				</div>
				<div className="container-battlepass">
				</div>
				<div className="homePage">
					<Sidebar/>
					<Topbar/>
					<div className="container">
						<div className="post1">
							<h1>The International Teams</h1>
							<p>The International 2016 Main Event is just seven weeks away, and we are pleased to announce the six teams that have received direct invites to compete in Seattle, as well as those that have the opportunity to battle through the Regional Qualifiers to earn a place in the biggest tournament of the year. Head over to the announcement website to see the directly-invited teams and the squads slated for Regional Qualifier action—which will run June 25 – 28. The top two teams from each region will earn invites to The International. Third-place finishers will also make the trip to Seattle for the Wild Card round, where they fight to secure one of the final two spots in the tournament.</p>
							<p>To round out the Regional Qualifier pool, aspiring teams can once again enter into the Open Qualifiers for a chance to break into the professional scene and compete against the world’s best. Faceit (Americas, Europe, Southeast Asia) and Perfect World (China) are organizing the four Open regional tournaments running June 21 – 24, and the top two teams from each Open Qualifier will receive an invite to their respective Regional Qualifier. If you think you have what it takes to lane against the Dota elite, follow the links at the bottom of the announcement page to register your team.</p>
							<p>Good luck to all participants. We look forward to welcoming the 18 teams to Seattle.</p>
							<br/><Link to="about" className="btn">Learn more</Link>
						</div>
						<br/><br/><br/><br/>
						<div className="post2">
							<h2>Manila Champions, TI Qualifiers and 6.88 Gameplay Update</h2>
							<p>Congratulations to OG for their Manila Major Championship. They had an impressive run through the Upper Bracket, taking down Natus Vincere, MVP Phoenix and Newbee. Team Liquid defeated five different teams in the Lower Bracket as they climbed their way back up to face OG in the Grand Finals. OG secured the victory by defeating Team Liquid 3-1, earning them an impressive second Major Championship title.</p>
							<p>With The Manila Major behind us, teams set their sights on The International taking place this August. The Open Qualifiers will be kicking off June 21st, with the Regional Qualifiers right afterwards on June 25th.</p>
							<p>In preparation for The International, a balance focused patch will be released today. In the 6.88 update you will find various minor balance tweaks geared towards ironing out some rough edges as we head into ESL Frankfurt next weekend and The International Qualifiers the following week. Head over to the <a className="post2-patch" href="http://store.steampowered.com/news/22385/">patch notes</a> page to read up on the changes in the 6.88 gameplay update.</p>
							<br/><Link to="about" className="btn">Learn more</Link><br/><br/>
						</div>
						<br/>
					</div>
				</div>
				<br/><br/><br/><br/>
				<div className="end-content"></div>
			</div>
		);
	}
}

export default homePage;
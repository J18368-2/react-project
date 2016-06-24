//This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/header';
import Footer from './common/footer';

class appTemplate extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

appTemplate.propTypes = {
	children: PropTypes.object.isRequired
};

export default appTemplate;
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class coursesPage extends React.Component {
	constructor(props) {
		super(props);
	}

	courseRow(course, index) {
		return <div key={index}>{course.title}</div>;
	}

	render() {
		const {courses} = this.props;

		return (
			<div>
				<h1>Courses</h1>
				<CourseList courses={courses}/>
			</div>
		);
	}
}


//for prop type validation
coursesPage.propTypes = {
	courses: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

//what state from the Redux store that you want to expose to this component, it can be state.name,state.last_name,etc but in here we decided to expose the entire state
function mapStateToProps(state, ownProps) {
	return {
		//we'll call this in our component -> this.props.courses
		courses: state.courses
	};
}

//what actions you want to expose. The built in required parameter by default is dispatch (because we'll dispatch actioncreators/actions, via props).
function mapDispatchToProps(dispatch) {
	return {
		//we'll call this in our component -> this.props.actions
		actions: bindActionCreators(courseActions,dispatch)
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(coursesPage);
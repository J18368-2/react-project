import React from 'react';
import { Route, IndexRoute } from 'react-router';
import appTemplate from './components/app_template';
import homePage from './components/home/homePage';
import aboutPage from './components/about/aboutPage';
import coursesPage from './components/course/coursesPage';

export default (
	<Route path="/" component={appTemplate}>
		<IndexRoute component={homePage} />
		<Route path="about" component={aboutPage} />
		<Route path="course" component={coursesPage} />
	</Route>
);
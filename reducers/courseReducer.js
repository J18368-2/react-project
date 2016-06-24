/* Example of Reducer.
   Reducers handles the Actions.
   They take the state from an Action, change it and return it to the store.
*/


/**/

import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
	switch(action.type) {
		case types.CREATE_COURSE:
			return [...state,
				Object.assign({}, action.course)
			];

		case types.LOAD_COURSES_SUCCESS:
			return action.courses;

		default:
			return state;
	}
}
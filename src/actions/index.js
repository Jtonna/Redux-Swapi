import axios from 'axios'
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const FETCHING = 'FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCSESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const addCharacter = (char) => dispatch => {
	dispatch({
		type: FETCHING,
	})
	axios('https://swapi.co/api/people')
	.then(res => dispatch({
		type: FETCH_SUCCESS,
		payload: res.data.results,
	}))
	.catch(error => dispatch ({
		type: FETCH_FAILURE,
		error
	}))
}

import { ADD_ADVERT_START } from "../actions/types"
import { ADD_ADVERT_SUCCESS } from "../actions/types"
import { ADD_ADVERT_ERROR } from "../actions/types"

import { FETCH_ADVERT_START } from "../actions/types"
import { FETCH_ADVERT_SUCCESS } from "../actions/types"
import { FETCH_ADVERT_ERROR } from "../actions/types"
import { FETCH_ADVERTS_SUCCESS } from "../actions/types"

const initialState = {
	results: 0,
	adverts: [],
	loading: false,
	error: null,
	advert: []
}

const adverts = (prevState = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_ADVERT_SUCCESS:
			return {
				...prevState,
				loading: false,
				error: null
			}
		case ADD_ADVERT_START:
			return {
				...prevState,
				loading: true,
				error: null
			}
		case ADD_ADVERT_ERROR:
			return {
				...prevState,
				loading: false,
				error: payload.error
			}

		case FETCH_ADVERT_START:
			return {
				...prevState,
				loading: true,
				error: null
			}
		case FETCH_ADVERT_ERROR:
			return {
				...prevState,
				loading: false,
				error: payload.error
			}
		case FETCH_ADVERT_SUCCESS:
			return {
				...prevState,
				loading: false,
				error: null,
				advert: payload.advert
			}
		case FETCH_ADVERTS_SUCCESS:
			return {
				...prevState,
				loading: false,
				error: null,
				adverts: payload.adverts,
				results: payload.results
			}
		default:
			return prevState
	}
}

export default adverts

import { ADD_ADVERT_START } from "./types"
import { ADD_ADVERT_SUCCESS } from "./types"
import { ADD_ADVERT_ERROR } from "./types"

import { FETCH_ADVERT_START } from "./types"
import { FETCH_ADVERT_SUCCESS } from "./types"
import { FETCH_ADVERT_ERROR } from "./types"

import { FETCH_ADVERTS_SUCCESS } from "./types"

const url = "http://localhost:4000"

export const addAdvert = data => {
  return async dispatch => {
    dispatch({ type: ADD_ADVERT_START })
    try {
      const response = await fetch(`${url}/api/v1/ads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      const advert = await response.json()
      dispatch({ type: ADD_ADVERT_SUCCESS, payload: advert })
    } catch (error) {
      dispatch({ type: ADD_ADVERT_ERROR, error })
    }
  }
}

export const fetchAdverts = (page, sortBy, orderBy) => {
  return async dispatch => {
    dispatch({ type: FETCH_ADVERT_START })
    try {
      const response = await fetch(`${url}/api/v1/ads?page=${page}&sortBy=${sortBy}&orderBy=${orderBy}`)
      const adverts = await response.json()
      dispatch(fetchAdvertsSuccess(adverts.data, adverts.results))
    } catch (error) {
      dispatch(fetchAdvertsError(error))
    }
  }
}

export const fetchAdById = id => {
  return async dispatch => {
    dispatch({ type: FETCH_ADVERT_START })
    try {
      const response = await fetch(`${url}/api/v1/ads/${id}?fields=description,images`)
      const advert = await response.json()
      dispatch(fetchAdvertSuccess(advert.data))
    } catch (error) {
      dispatch(fetchAdvertsError(error))
    }
  }
}

export const fetchAdvertsSuccess = (adverts, results) => {
  return {
    type: FETCH_ADVERTS_SUCCESS,
    payload: {
      adverts,
      results
    }
  }
}

export const fetchAdvertSuccess = advert => ({
  type: FETCH_ADVERT_SUCCESS,
  payload: {
    advert
  }
})

export const fetchAdvertsError = error => ({
  type: FETCH_ADVERT_ERROR,
  payload: {
    error
  }
})

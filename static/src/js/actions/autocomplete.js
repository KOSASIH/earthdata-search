import { isCancel } from 'axios'

import AutocompleteRequest from '../util/request/autocompleteRequest'
import {
  CLEAR_AUTOCOMPLETE_SUGGESTIONS,
  LOADED_AUTOCOMPLETE,
  LOADING_AUTOCOMPLETE,
  UPDATE_AUTOCOMPLETE_SUGGESTIONS,
  UPDATE_AUTOCOMPLETE_SELECTED,
  DELETE_AUTOCOMPLETE_VALUE,
  CLEAR_AUTOCOMPLETE_SELECTED
} from '../constants/actionTypes'
import { handleError } from './errors'
import actions from '.'
import { autocompleteFacetsMap } from '../util/autocompleteFacetsMap'
import { scienceKeywordTypes } from '../util/scienceKeywordTypes'

export const onAutocompleteLoaded = payload => ({
  type: LOADED_AUTOCOMPLETE,
  payload
})

export const onAutocompleteLoading = () => ({
  type: LOADING_AUTOCOMPLETE
})

export const clearAutocompleteSelected = () => ({
  type: CLEAR_AUTOCOMPLETE_SELECTED
})

export const clearAutocompleteSuggestions = () => ({
  type: CLEAR_AUTOCOMPLETE_SUGGESTIONS
})

export const updateAutocompleteSuggestions = payload => ({
  type: UPDATE_AUTOCOMPLETE_SUGGESTIONS,
  payload
})

export const updateAutocompleteSelected = payload => ({
  type: UPDATE_AUTOCOMPLETE_SELECTED,
  payload
})

export const deleteAutocompleteValue = payload => ({
  type: DELETE_AUTOCOMPLETE_VALUE,
  payload
})

let cancelToken

export const fetchAutocomplete = data => (dispatch, getState) => {
  if (!data) return null

  if (cancelToken) {
    cancelToken.cancel()
  }

  const { value } = data

  const { authToken } = getState()

  dispatch(onAutocompleteLoading())

  const requestObject = new AutocompleteRequest(authToken)
  cancelToken = requestObject.getCancelToken()

  const params = {
    q: value
  }

  const response = requestObject.search(params)
    .then((response) => {
      const { data } = response
      const { feed } = data
      const { entry } = feed

      dispatch(onAutocompleteLoaded({ loaded: true }))
      dispatch(updateAutocompleteSuggestions({ suggestions: entry }))
    })
    .catch((error) => {
      if (isCancel(error)) return

      dispatch(onAutocompleteLoaded({ loaded: false }))

      dispatch(handleError({
        error,
        action: 'fetchAutocomplete',
        resource: 'suggestions',
        requestObject
      }))
    })

  return response
}

/**
 * Maps a science keyword string into individual parts
 * @param {String} value Colon-separated string of a science keyword
 */
const mapScienceKeywords = (value) => {
  const values = value.split(':')
  const returnValue = {}

  values.forEach((keywordValue, index) => {
    returnValue[scienceKeywordTypes[index]] = keywordValue
  })

  return returnValue
}

/**
 * Map an autocomplete suggestion into a CMR Facet
 * @param {Object} autocomplete autocomplete suggestion
 */
const mapAutocompleteToFacets = (autocomplete) => {
  const { suggestion } = autocomplete
  const { type, value } = suggestion

  const mappedType = autocompleteFacetsMap[type]

  if (!mappedType) return null

  const facets = {
    [mappedType]: value
  }

  // TODO I think this code works, but waiting for CMR-xxxx
  // type: "science-keywords"
  // value: "ATMOSPHERE:EARTH SCIENCE:LIQUID PRECIPITATION:RAIN:FREEZING RAIN"
  //
  // science_keywords_h: [
  //   {variable_level_1: "LIQUID PRECIPITATION", variable_level_2: 'Rain', variable_level_3: 'Freezing Rain', term: "Precipitation", topic: "Atmosphere"}
  // ]
  if (mappedType === 'science_keywords_h') {
    facets.science_keywords_h = mapScienceKeywords(value)
  }

  return facets
}

/**
 * Action for selecting an autocomplete suggestion
 * @param {Object} data Autocomplete suggestion
 */
export const selectAutocompleteSuggestion = data => (dispatch) => {
  const cmrFacet = mapAutocompleteToFacets(data)
  if (cmrFacet) dispatch(actions.addCmrFacet(cmrFacet))

  dispatch(updateAutocompleteSelected(data))
  dispatch(actions.changeQuery({ collection: { pageNum: 1, keyword: '' } }))
}

/**
 * Action for removing an autocomplete suggestion
 * @param {Object} data Autocomplete suggestion
 */
export const removeAutocompleteValue = data => (dispatch) => {
  const cmrFacet = mapAutocompleteToFacets({ suggestion: data })
  if (cmrFacet) dispatch(actions.removeCmrFacet(cmrFacet))
  dispatch(deleteAutocompleteValue(data))
  dispatch(actions.getCollections())
}

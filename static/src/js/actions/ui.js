import {
  MASTER_OVERLAY_PANEL_DRAG_END,
  MASTER_OVERLAY_PANEL_DRAG_START,
  MASTER_OVERLAY_PANEL_UPDATE_RESIZE,
  GRANULE_RESULTS_PANEL_UPDATE_SORT_ORDER,
  GRANULE_RESULTS_PANEL_UPDATE_SEARCH_VALUE
} from '../constants/actionTypes'

export const masterOverlayPanelDragStart = data => (dispatch) => {
  dispatch({
    type: MASTER_OVERLAY_PANEL_DRAG_START,
    payload: data
  })
}

export const masterOverlayPanelDragEnd = () => (dispatch) => {
  dispatch({
    type: MASTER_OVERLAY_PANEL_DRAG_END
  })
}

export const masterOverlayPanelResize = newHeight => (dispatch) => {
  dispatch({
    type: MASTER_OVERLAY_PANEL_UPDATE_RESIZE,
    payload: newHeight
  })
}

export const granuleResultsPanelUpdateSortOrder = sortOrder => (dispatch) => {
  dispatch({
    type: GRANULE_RESULTS_PANEL_UPDATE_SORT_ORDER,
    payload: sortOrder
  })
}

export const granuleResultsPanelUpdateSearchValue = searchValue => (dispatch) => {
  dispatch({
    type: GRANULE_RESULTS_PANEL_UPDATE_SEARCH_VALUE,
    payload: searchValue
  })
}
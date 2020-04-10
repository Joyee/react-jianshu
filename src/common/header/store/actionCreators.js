import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeSearchTipList = (data) => ({
  type: constants.CHANGE_TIP_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocusAction = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlurAction = () => ({
  type: constants.SEARCH_BLUR
})

export const getSearchTipListAction = () => {
  return (dispatch) => {
    axios.get('/api/searchTips.json').then(res => {
      if (res.data.success) {
        dispatch(changeSearchTipList(res.data.data))
      }
    }).catch(err => {
      console.log('error: ', err)
    })
  }
}

export const mouseEnterAction = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeaveAction = () => ({
  type: constants.MOUSE_LEAVE
})

export const changeTipPageAction = (page) => ({
  type: constants.CHANGE_TIP_PAGE,
  page
})
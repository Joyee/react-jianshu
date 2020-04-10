import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeDataAction = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  recommendList: data.recommendList,
  articleList: data.articleList,
  recommendAuthor: data.recommendAuthor
})

const addArticleListAction = (data) => ({
  type: constants.ADD_ARTICLE_DATA,
  data: fromJS(data)
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const result = res.data
      if (result.success) {
        dispatch(changeHomeDataAction(result.data))
      }
    })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then(res => {
      const result = res.data
      if (result.success) {
        dispatch(addArticleListAction(result.data))
      }
    })
  }
}

export const changeScrollTopShowAction = (flag) => ({
  type: constants.CHANGE_SCROLL_TOP_SHOW,
  show: flag
})
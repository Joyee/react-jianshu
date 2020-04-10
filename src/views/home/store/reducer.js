import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
  recommendList: [],
  recommendAuthor: [],
  articleList: [],
  showBackTop: true,
})

const changeHomeData = (state, action) => {
  return state.merge({
    recommendList: fromJS(action.recommendList),
    recommendAuthor: fromJS(action.recommendAuthor),
    articleList: fromJS(action.articleList)
  })
}

const addArticleData = (state, action) => {
  return state.set(
    'articleList',
    state.get('articleList').concat(action.data)
  )
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_ARTICLE_DATA:
      return addArticleData(state, action)
    case constants.CHANGE_SCROLL_TOP_SHOW:
      return state.set('showBackTop', action.show)
    default:
      return state
  }
}
import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
  recommendList: [],
  recommendAuthor: [],
  articleList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATDA:
      return state.merge({
        recommendList: action.recommendList,
        recommendAuthor: action.recommendAuthor,
        articleList: action.articleList
      })
    default:
      return state
  }
}
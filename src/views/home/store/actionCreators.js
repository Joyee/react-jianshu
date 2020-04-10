import * as constants from './constants'
import axios from 'axios'

const changeHomeDataAction = (data) => ({
  type: constants.CHANGE_HOME_DATDA,
  recommendList: data.recommendList,
  articleList: data.articleList,
  recommendAuthor: data.recommendAuthor
})

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      console.log(res)
      const result = res.data
      if (result.success) {
        dispatch(changeHomeDataAction(result.data))
      }
    })
  }
}
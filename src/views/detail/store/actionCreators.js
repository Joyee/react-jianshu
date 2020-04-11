import axios from 'axios'
import * as constants from './constants'

const changeDetail = (data) => ({
  type: constants.CHANGE_DETAIL,
  title: data.title,
  content: data.content
})

export const getDetailDataAction = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then(res => {
      console.log()
      if (res.data.success) {
        dispatch(changeDetail(res.data.data))
      }
    })
  }
}
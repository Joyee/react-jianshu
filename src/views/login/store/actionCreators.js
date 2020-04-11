import * as constants from './constants'
import axios from 'axios'

const changeLoginStatus = () => ({
  type: constants.CHANGE_STATUS,
  value: true
})

export const loginAction = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      if (res.data.success) {
        dispatch(changeLoginStatus(res.data.data))
      }
    })
  }
}

export const logoutAction = () => ({
  type: constants.CHANGE_STATUS,
  value: false
})
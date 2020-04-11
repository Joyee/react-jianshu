import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  LoginMain,
  InputBox,
  SignInButton
} from './style'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render () {
    const { isLogin } = this.props
    if (!isLogin) {
      return (
        <LoginMain>
          <div className='title'><a href='/'>登录</a></div>
          <InputBox>
            <input
              className='name'
              placeholder='用户名'
              ref={(input) => this.account = input}
            />
          </InputBox>
          <InputBox>
            <input
              className='password'
              type='password'
              placeholder='密码'
              ref={(input) => this.password = input}
            />
          </InputBox>
          <SignInButton onClick={() => this.props.handleLogin(this.account, this.password)}>登录</SignInButton>
        </LoginMain>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDipatchToProps = (dispatch) => {
  return {
    handleLogin(account, password) {
      // console.log(account.value, password.value)
      dispatch(actionCreators.loginAction(account.value, password.value))
    }
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Login)
import styled from 'styled-components'

export const LoginMain = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;

  .title {
    text-align: center;
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;

    a {
      font-weight: 700;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
      padding: 10px;
    }
  }
`

export const InputBox = styled.div`
  input {
    outline: none;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
  }
`

export const SignInButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  display: block;
`
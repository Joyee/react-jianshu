import styled from 'styled-components'
const logo = 'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs(() => ({
  href: '/'
}))`
  width: 100px;
  height: 56px;
  display: block;
  position: absolute;
  background: url(${logo}) no-repeat;
  background-size: contain;
`

export const Nav = styled.ul`
  width: 960px;
  height: 56px;
  display: flex;
  flex-direaction: row;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
`

export const NavItem = styled.li`
  > a {
    padding: 15px;
    color: #333;

    &.active {
      color: #ea6f5a;
    }
  }

  &.search {
    margin-right: 10px;
    margin-left: 15px;
    position: relative;

    .search-btn {
      position: absolute;
      top: 4px;
      right: 5px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      padding: 0;
      color: #969696;
      text-align: center;

      &.focused {
        background-color: #969696;
        border-radius: 50%;
        color: #fff;
      }
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  padding: 0 40px 0 20px;
  width: 240px;
  transition: width 0.5s ease;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline: none;
  color: #666;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 320px;
    transition: width 0.5s ease;
  }
`

export const Btn = styled.a.attrs(() => ({
  href: '/'
}))`
  padding: 6px 12px;
  float: right;
  text-align: center;

  &.write-btn {
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;

    .iconfont {
      margin-right: 3px;
    }
  }

  &.sign-up {
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
  }

  &.login {
    margin: 12px 6px 0 10px;
    font-size: 15px;
    color: #969696;
  }
`

export const SearchBarTips = styled.div`
  margin-top: 9px;
  width: 250px;
  padding: 0 20px;
  left: 0;
  top: 100%;
  border-radius: 4px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);

  ::before {
    content: "";
    left: 27px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: -5px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    z-index: -1;
  }
`

export const SearchBarTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #999;
`

export const SearchBarSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;

  .spin {
    font-size: 12px;
    display: block;
    float: left;
    margin-right: 2px;
    transition: all .1s ease-in;
    transform-origin: center center;
  }
`

export const SearchTip = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const SearchTipItem = styled.a`
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 15px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;

  &.hover {
    color: #333;
  }
`
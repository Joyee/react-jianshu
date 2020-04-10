import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Btn,
  NavSearch,
  SearchBarTips,
  SearchBarSwitch,
  SearchBarTitle,
  SearchTip,
  SearchTipItem,
} from './style'


class Header extends React.Component {

  getSearchTips = () => {
    const { focused, tipList, mouseIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = tipList.toJS()
    const list = []
    
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        list.push(newList[i])
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchBarTips
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <SearchBarTitle>
              热门搜索
              <SearchBarSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                <span ref={(spin) => this.spinIcon = spin} className="iconfont spin">&#xe851;</span>
                换一换
              </SearchBarSwitch>
            </SearchBarTitle>
            <SearchTip>
              {
                list.length && list.map((item) => {
                  return <SearchTipItem key={item}>{item}</SearchTipItem>
                })
              }
            </SearchTip>
          </SearchBarTips>
      )
    }
  }
  render () {
    const { focused, tipList, handleInputBlur, handleInputFocus } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Btn className="write-btn"><span className="iconfont">&#xe608;</span>写文章</Btn>
        <Btn className='sign-up'>注册</Btn>
        <Btn className='login'>登录</Btn>
        <Nav>
          <NavItem><a href="/" className="active">首页</a></NavItem>
          <NavItem><a href="/">下载APP</a></NavItem>
          <NavItem className="search">
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocus(tipList)}
              onBlur={handleInputBlur}
            ></NavSearch>
            <a className={focused ? 'search-btn focused' : 'search-btn'} href='/'><span className='iconfont'>&#xe6e4;</span></a>
            {this.getSearchTips()}
          </NavItem>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    // focused: state.header.get('focused') // immutabel的用法
    // focused: state.get('header').get('focused') // redux-immutable使state也成为immutable对象
    focused: state.getIn(['header', 'focused']),
    tipList: state.getIn(['header', 'tipList']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (tipList) {
      tipList.size === 0 && dispatch(actionCreators.getSearchTipListAction())
      dispatch(actionCreators.searchFocusAction())
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlurAction())
    },
    handleMouseEnter () {
      dispatch(actionCreators.mouseEnterAction())
    },
    handleMouseLeave () {
      dispatch(actionCreators.mouseLeaveAction())
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 0)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      dispatch(actionCreators.changeTipPageAction(page < totalPage ? page+1 : 1))
    }
  }
}
// export default Header
export default connect(mapStateToProps, mapDispatchToProps)(Header)
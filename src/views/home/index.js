import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Main,
  AsideWrap,
  BackToTop
} from './style'
import { actionCreators } from './store'

import List from './components/List'
import Board from './components/Board'
import RecommendAuthor from './components/RecommendAuthor'
import Recommend from './components/Recommend'

class Home extends React.Component {
  render () {
    return (
      <Container>
        <Main>
          <Recommend />
          <List />
        </Main>
        <AsideWrap>
          <Board />
          <RecommendAuthor />
        </AsideWrap>

        {this.props.showBackTop && <BackToTop onClick={this.handleBackTop}>回到顶部</BackToTop>}
      </Container>
    )
  }

  componentDidMount () {
    this.props.handleGetData()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleBackTop () {
    window.scroll(0, 0)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetData () {
      dispatch(actionCreators.getHomeData())
    },
    changeScrollTopShow () {
      dispatch(actionCreators.changeScrollTopShowAction(document.documentElement.scrollTop > 50 ? true : false))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
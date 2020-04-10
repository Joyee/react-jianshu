import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Main,
  AsideWrap
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
      </Container>
    )
  }

  componentDidMount () {
    this.props.handleGetData()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetData () {
      dispatch(actionCreators.getHomeData())
    }
  }
}
export default connect(null, mapDispatchToProps)(Home)
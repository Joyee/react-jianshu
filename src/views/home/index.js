import React from 'react'
import {
  Container,
  Main,
  AsideWrap
} from './style'

import List from './components/List'
import Board from './components/Board'
import RecommendAuthor from './components/RecommendAuthor'
import Recommend from './components/Recommend'

class Home extends React.Component {
  render () {
    return (
      <Container>
        <Main>
          <Recommend/>
          <List/>
        </Main>
        <AsideWrap>
          <Board/>
          <RecommendAuthor/>
        </AsideWrap>
      </Container>
    )
  }
}

export default Home
import React from 'react'
import {
  BoardWrap
} from '../style'
class Board extends React.Component {
  render () {
    return (
      <BoardWrap>
        <a href='/'><img alt='' src='https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'/></a>
        <a href='/'><img alt='' src='https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'/></a>
        <a href='/'><img alt='' src='https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'/></a>
        <a href='/'><img alt='' src='https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'/></a>
      </BoardWrap>
    )
  }
}

export default Board
import React from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ArticleList
} from '../style'
import { actionCreators } from '../store'

class List extends React.Component {
  render () {
    return (
      <div className='list-container'>
        <ArticleList>
          {this.props.articleList.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <div className='content'>
                  <a className='title' href='/detail'>{item.get('title')}</a>
                  <p className='abstract'>{item.get('abstract')}</p>
                  <div className='meta'></div>
                </div>
              </ListItem>
            )
          })}
          <button className='load-more' onClick={this.props.handleLoadMore}>阅读更多</button>
        </ArticleList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadMore () {
      dispatch(actionCreators.getMoreList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
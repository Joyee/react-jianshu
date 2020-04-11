import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ArticleList
} from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render () {
    return (
      <div className='list-container'>
        <ArticleList>
          {this.props.articleList.map(item => {
            return (
              <Link key={item.get('id')} to={`/detail/${item.get('id')}`}>
                <ListItem>
                  <div className='content'>
                    <p className='title' href='#'>{item.get('title')}</p>
                    <p className='abstract'>{item.get('abstract')}</p>
                    <div className='meta'></div>
                  </div>
                </ListItem>
              </Link>
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
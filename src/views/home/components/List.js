import React from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ArticleList
} from '../style'

class List extends React.Component {
  render () {
    return (
      <div className='list-container'>
        <ArticleList>
          {this.props.articleList.map(item => {
            return (
              <ListItem key={item.id}>
                <div className='content'>
                  <a className='title' href='/detail'>{item.title}</a>
                  <p className='abstract'>{item.abstract}</p>
                  <div className='meta'></div>
                </div>
              </ListItem>
            )
          })}
          <a className='load-more' href='/'>阅读更多</a>
        </ArticleList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

export default connect(mapStateToProps)(List)
import React from 'react'
import { connect } from 'react-redux'
import {
  RecommendAuthorWrap,
  RecommendAuthorListItem,
  RecommendAuthorList,
  SearchBarSwitch
} from '../style'
class RecommendAuthor extends React.Component {
  render () {
    return (
      <RecommendAuthorWrap>
        <div className='title'>
          <span>推荐作者</span>
          <SearchBarSwitch>
            <span ref={(spin) => this.spinIcon = spin} className="iconfont spin">&#xe851;</span>换一批</SearchBarSwitch>
        </div>
        <RecommendAuthorList>
          {
            this.props.recommendAuthor.map((item) => {
              return (
                <RecommendAuthorListItem key={item.id}>
                  <a className='avatar' href='/'>
                    <img src={item.avatar} alt='' />
                  </a>
                  <a className='info' href='/'>
                    <div className='name'>{item.name}</div>
                    <p className='desc'>写了{item.total}字 · {item.like}喜欢</p>
                  </a>
                  <a className='follow' href='/'><span className='iconfont'>&#xe65b;</span>关注</a>
                </RecommendAuthorListItem>
              )
            })
          }
        </RecommendAuthorList>
      </RecommendAuthorWrap>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendAuthor: state.getIn(['home', 'recommendAuthor'])
})

export default connect(mapStateToProps)(RecommendAuthor)
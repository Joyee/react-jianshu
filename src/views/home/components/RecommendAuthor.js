import React from 'react'
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
          <RecommendAuthorListItem>
            <a className='avatar' href='/'>
              <img src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
            </a>
            <a className='info' href='/'>
              <div className='name'>董克平日记</div>
              <p className='desc'>写了912.9k字 · 3.4k喜欢</p>
            </a>
            <a className='follow' href='/'><span className='iconfont'>&#xe65b;</span>关注</a>
          </RecommendAuthorListItem>
          <RecommendAuthorListItem>
            <a className='avatar' href='/'>
              <img src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
            </a>
            <a className='info' href='/'>
              <div className='name'>董克平日记</div>
              <p className='desc'>写了912.9k字 · 3.4k喜欢</p>
            </a>
            <a className='follow' href='/'><span className='iconfont'>&#xe65b;</span>关注</a>
          </RecommendAuthorListItem>
        </RecommendAuthorList>
      </RecommendAuthorWrap>
    );
  }
}

export default RecommendAuthor
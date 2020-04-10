import React from 'react'
import {
  RecommentWrap
} from '../style'
class Recommend extends React.Component {
  render () {
    return (
      <RecommentWrap>
        <a className='collection' href='/'>
          <img src='https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' alt='' />
          <div className='name'>自然科普</div>
        </a>
        <a className='collection' href='/'>
          <img alt='64' src='https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' />
          <div className='name'>读书</div>
        </a>
        <a className="collection" target="_blank" href='/'>
          <img src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
          <div className="name">摄影</div>
        </a>
        <a className="collection" target="_blank" href='/'>
          <img src="https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
          <div className="name">故事</div>
        </a>
        <a className="collection" target="_blank" href='/'>
          <img src="https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
          <div className="name">手绘</div>
        </a>
        <a className="collection" target="_blank" href='/'>
          <img src="https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
          <div className="name">@IT·互联网</div>
        </a>
        <a className="collection" target="_blank" href='/'>
          <img src="https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
          <div className="name">旅行·在路上</div>
        </a>
        <a className="more-hot-collection" target="_blank" href='/'>
          更多热门专题 <i className="iconfont ic-link"></i>
        </a>
      </RecommentWrap>
    )
  }
}

export default Recommend
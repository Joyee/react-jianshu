import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  RecommentWrap
} from '../style'

class Recommend extends PureComponent {
  render () {
    return (
      <RecommentWrap>
        {
          this.props.recommendList.map((item) => {
            return (
              <a className='collection' href='/' key={item.get('id')}>
                <img src={item.get('imgUrl')} alt='' />
                <div className='name'>{item.get('title')}</div>
              </a>
            )
          })
        }
        <a className="more-hot-collection" target="_blank" href='/'>
          更多热门专题 <i className="iconfont ic-link"></i>
        </a>
      </RecommentWrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapStateToProps)(Recommend)
import React from 'react'
import { DetailWrap } from './style'
import { connect } from 'react-redux'
import {
  actionCreators
} from './store'
class Detail extends React.Component {
  render () {
    const { title, content } = this.props
    return (
      <DetailWrap>
        <div>
          <h2 className='title'>{title}</h2>
          <p className='content' dangerouslySetInnerHTML={{__html: content}}></p>
        </div>
      </DetailWrap>
    )
  }

  componentDidMount () {
    this.props.getDetailData()
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDipatchToProps = (dispatch) => {
  return {
    getDetailData () {
      dispatch(actionCreators.getDetailDataAction())
    }
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Detail)
import React from 'react'
import { DetailWrap } from './style'
import { connect } from 'react-redux'
import {
  actionCreators
} from './store'

class Detail extends React.Component {
  render () {
    return (
      <DetailWrap>
        <div>
          <h2 className='title'>{this.props.title}</h2>
          <p className='content' dangerouslySetInnerHTML={{__html: this.props.content}}></p>
        </div>
      </DetailWrap>
    )
  }

  componentDidMount () {
    this.props.getDetailData(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDipatchToProps = (dispatch) => {
  return {
    getDetailData (id) {
      dispatch(actionCreators.getDetailDataAction(id))
    }
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Detail)
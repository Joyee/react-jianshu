import React from 'react'
import {
  ListItem,
  ArticleList
} from '../style'

class List extends React.Component {
  render () {
    return (
      <div className='list-container'>
        <ArticleList>
          <ListItem>
            <div className='content'>
              <a className='title' href='/detail'>怀孕女子大巴上假装肚子疼，逼迫司机半路停车，却救回一车人性命</a>
              <p className='abstract'>在一个长途大巴上，怀孕女子马晓晴突然大喊肚子疼，要下车方便一下。司机不同意，在马晓晴的逼迫下，不得已将车停在了路边。司机骂骂咧咧，但出人意料的是...</p>
              <div className='meta'></div>
            </div>
          </ListItem>
          <ListItem>
            <div className='content'>
              <a className='title' href='/detail'>47岁的陶虹：绝顶聪明的女人，都不声不响地拥有了全世界</a>
              <p className='abstract'>文 | 嘻嘻 ​ 最近，随着《小欢喜》开播，已经很久没在电视剧荧幕里出现的陶虹，重新回到了大众的视野中。 剧中的她，饰演一位金牌辅导老师。刚出场...</p>
              <div className='meta'></div>
            </div>
          </ListItem>
          <a className='load-more' href='/'>阅读更多</a>
        </ArticleList>
      </div>
    )
  }
}

export default List
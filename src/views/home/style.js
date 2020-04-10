import styled from 'styled-components'

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
`
export const Main = styled.div`
  width: 640px;
  padding: 30px 0 0 15px;
`
export const RecommentWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;

  .collection {
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    display: inline-flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }

    .name {
      padding: 0 11px 0 6px;
      font-size: 14px;
    }
  }

  .more-hot-collection {
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
  }
`
export const AsideWrap = styled.div`
  width: 280px;
  margin-left: 40px;
  padding-top: 30px;
`
export const ArticleList = styled.ul`
  .load-more {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px auto 60px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    display: block;
    border-radius: 20px;
    background-color: #a5a5a5;
  }
`
export const ListItem = styled.li`
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;

  .content {
    display: flex;
    flex-direction: column;

    .title {
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }

    // .title:visited {
    //   color: #969696;
    // }

    .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
  }
`

export const BoardWrap = styled.div`
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;

  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
  
`

export const RecommendAuthorWrap = styled.div`
  .title {
    span {
      font-size: 14px;
      color: #969696;
    }
  }
`

export const SearchBarSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;

  .spin {
    font-size: 12px;
    display: block;
    float: left;
    margin-right: 2px;
    transition: all .1s ease-in;
    transform-origin: center center;
  }
`

export const RecommendAuthorListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  position: relative;

  .avatar {
    display: block;
    width: 48px;
    height: 48px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: #969696;
      margin-top: 10px;
    }
  }

  .follow {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 13px;
    color: #42c02e;
  }
`

export const RecommendAuthorList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
`
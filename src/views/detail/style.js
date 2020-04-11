import styled from 'styled-components'

export const DetailWrap = styled.div`
  width: 730px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 66px);
  padding-top: 10px;
  font-size: 16px;

  .title {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    color: #404040;
    margin-bottom: 32px;
  }

  .content {
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 20px;

    p {
      margin-bottom: 20px;
      word-break: break-word;
    }
  }
`
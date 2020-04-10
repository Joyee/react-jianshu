import { createGlobalStyle } from 'styled-components'

const iconfontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1586510555907'); /* IE9 */
    src: url('./iconfont.eot?t=1586510555907#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQsAAsAAAAACLAAAAPdAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqEMIN2ATYCJAMYCw4ABCAFhG0HTBugB8gOJSHBwAAAAFBgPPy3H+2+mfmzKklEuydB0mYSHk2rWIiQEpTM6Z5J+v+/Z90kg5x0jaw0MJN0oOIlBZO3pr6EdkGPDo6ZLq3B8mw2p8iwqKSg8XhAA4tIK6A9UIE8P4j+MHZxGccJtBvTH3GUksUBrdDGBeKmUdIAHdMqJamhVag5S4t4B55a03PyMoC37s/HTwgImqTJtKkXLyfrIe4L/TafGlM/BspsBPD6M4NZRcYKUIhHudY7KN+/gtIu/QUPx0CnVkn5Qr8OeV36+uXb/Pp6YkLNGTp1P1mzrn+8RFRI2gmxp4GGL7TJJPMlhJsnK4VqAWUvIZPCt/wyCdQeOTDhA4BfoOFmfIiQZEkZadqUYspwA7p1SKVoFm8fu43Rli7aNm1LC1K7YMuYrSpN0cKt07cTg7mTd+D2bY7geMLtVo91CUI0ZsydfPUpF38DNLxUOpwT1IuP9+G37uD0gjRcOO0mXC6hSs87d/jp7lh+4fTty+V6bMzOuIvL1Zg5a8AxZlVxyaJOzIo2RZrjqukA7dH+iZl2lRirVo91vVH8gS0whx2mnyeIifyBcL1p+6aNBgLc6vJaGuIE6u4OjeD3ieLiR75KPDn5wIHJZNxo7UtxJz1qasrJ0sS11eOUxvpaV4Bzv6Q0PvjZ3OzsV6+zsqgDdxctPh0loepqcfr/aqHvI06f9uyOIsip+/ZNtUQk1ZFTw+kRqHve6dNL2gZ2PDWHNM+ZY0Zqco5fgd4GzoipN3on3UCN6rWJLlNMLk8maI0xbo/qGAVfDPMlPPd97H0EY8NyVWZcxMsKNb7UtmV1ux7fenSCMoD/x6gjVG+XusED8l1qTR5NAbk+n9EG81det+nRobJx1C9aVcDnQ6UPYN7/MR6QnwG8WZnavF+AV7OuyAJNV4tY2ywQqDYin5HQrh0v3tnvcV/yodrJhFZDISQtRiFrNYMs2BVodNiBqtUutFuWurrDABklShuWTAQQeu2GpNtHyHpdQRbsI2gM+wRVb1DQ7iyab9lhLoxMoow0GOlZ7VDWqLPbRMOAGS+1AEkDLRo5KnApApIVo4v19/FLhlKRDcl9zFAGSQEYi6wo261sCjgNWSx21iHbTUiHfQwYOyJ8fcW8F/no7FZgHJIhGhiix9IaimWkY2cj2u0xJvX9BRDJQBYacklNiVWAyBTG7ln+fPjVQKZKbbVqzqW3YhBJAAwT8SiRzM6KlQLNiEX327Ec+YNMEB3Mh6GF1yGCL2om1pX6jC+3XuUOaKfdpUaKHCWaqNEiXzdqPBSH0UY5kI0RNTZJrzEZbR8ZrwEAAAAA') format('woff2'),
    url('./iconfont.woff?t=1586510555907') format('woff'),
    url('./iconfont.ttf?t=1586510555907') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1586510555907#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconjia:before {
    content: "\e65b";
  }

  .iconspin:before {
    content: "\e851";
  }

  .iconpen:before {
    content: "\e608";
  }

  .iconfangdajing:before {
    content: "\e6e4";
  }

  .iconAa:before {
    content: "\e636";
  }


`

export default iconfontStyle
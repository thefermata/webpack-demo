const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html,js,css를 컴파일할때 모든 파일을 자동으로 컴파일 처리.?

module.exports = {
  entry: './src/index.js',  // entry 포인트, 어디서 시작하는가. 이파일에서 사용하는 모든 모듈을 하나로 압축 하여 outpu설정된 파일에 하나로 만들어 준다.
  output: {
    filename: 'main.js',  // 모든 모듈 스크립트를 하나로 묶어준다. 그래서 dist의 html에 보면 main.js로 연결되어 있다. (dist 상용화될 폴더)
    path: path.resolve(__dirname, 'dist') // 현재 폴더 기준
  },
  module: { // 모듈규칙
    rules: [
      {
        test: /\.css$/, // 테스트할 규칙. 정규식으로 .css를 포함하면 ($의 의미 .css로 끝난다를 판별) 아래 use 배열내 모듈을 적용한다.
        use: ["style-loader", "css-loader"] // test가 통과하면(predicate : true, false) use를 적용 , 이때 뒤쪽부터 순차로 적용된다. css-lodaer, style-loader
      },
      {
        test: /\.scss$/, // 테스트할 규칙. 정규식으로 .SCSS를 포함하면 ($의 의미 .SCSS로 끝난다를 판별) 아래 use 배열내 모듈을 적용한다.
        use: ["style-loader", "css-loader", "sass-loader"] // test가 통과하면(결과값이 true, false인 것에 대해 predicate라고 지칭 : true, false) use를 적용 ,
        // 이때 뒤쪽부터 순차로 적용된다.sass-loader, css-lodaer, style-loader
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
};
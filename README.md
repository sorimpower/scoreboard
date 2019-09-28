1.create-react-app으로 웹어플리케이션 구축 CLI : 커맨드에서 하는 방식
2.npx create-react-app scoreboard (npx로 설치하면 원격으로 리액트를 가져와서 걔를 설치하는거로, 나중에버전이 올라가도 그걸 유지할 수 있음)
= npm install -g create-react-app (create-react-app을 글로벌로 설치하라, 글로벌로 설치하면 local에서 버전업이 안됨)
  create-react-app scoreboard
create-react-app 이라는 라이브러리를 사용해서 scoreboard라는 웹어플리케이션을 만들겠다는 의미

3.npm이란 
노트 패키지 매니저
4.webpack이란
여러 모듈을 모아 하나로 만들어주는 모듈 번들러
즉 npm module 들을 가져와 소스를 개발하고 webpack이라는 npm 모듈을 이용해 내가 짠 소스를 하나의 파일로 묶는 역할(컴파일)을함


4.npm저장소 만드는 순서
1)처음에 폴더하나만들고
2)만든 폴더에서 npm init 하면 package.json이 생김
3)npm 모듈들은 npmjs.com에서 가져오는 것


5.npm install --save loadash
1)--save : package.json의 dependencies에 기록하라라는 의미

6.--save-dev 옵션
1)사용자가 사용하지않는 라이브러리인 경우 devdependencies에 설치하기위해 -dev옵션을 줌
그래야 배포할때 용량이 줄어듦

7.webpack으로 묶으면 dist폴더에 하나의 파일로 만들어짐 

8.webpack-dev-server모듈을 이용하면 컴파일 후 테스트가 용이해진다.

9.css의 전처리기로 sass/scss/less/style 등이 있다. css는 1차원적인 파일이기 때문에 좀더 코딩을 추가한 것이 전처리기를 사용하는 것이다.

10.모듈화 방법은 2가지다 (https://eastflag.co.kr/module/)
CommonJs 스펙
1)개별 모듈화 : exports.변수명
2)전체 모듈화 : module.exports

es6 스펙
1)개별 모듈화 : named exports
2)전체 모듈화 : default exports


11.Git 컨트리뷰트 하는법
Fork를 하면 내 계정으로 소스가 복사가 되어서 clone을 하고
내소스에서 수정한다음에 원 저장소로 pull request 를 날리면 원 저작자가 확인 후 머지를 한다.

12.
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
react-scripts안에 webpack이 있음

13.react 프로젝트를 시작할 때는 
npx create-react-app 프로젝트 이름 으로 설치하면 된다


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

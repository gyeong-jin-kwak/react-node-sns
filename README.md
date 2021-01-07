# React NodeBird SNS

## 네가지 주체
* Browser
* Frontend
* Backend
* Database

## React 페이지와 Next 페이지의 구분
* 사용자가 빠르게 interaction이 필요할 때 react를 사용
    * 단점 : loading 창 밖에 없을 경우 미완성인 상태로 오인되기도 함 (국내 검색엔진)
    * 단점을 보완 
        * code splitting : 방문한 페이지의 코드만 가지고 오는 방법
        * serverside rendering : 첫 방문만 전통적 방법으로 하고 후에 리액트 방식 적용
            * 첫 방문에는 브라우저 - 프론트 - 백 - 데이터베이스 
            * 그 다음 방문 부터는 브라우저 - 백
        * prerender : 검색엔진일 때만 html을 완성해서 주고, 일반 유저는 loading 창 (기존 리액트 방식)
        * ⭐️serverside rendering 과 code Splitting은 실무에서 꼭 적용해야 함
* Next.js 가 필요 없는 페이지 (React) : admin 페이지
* React 로 serverside rendering : #reactGo
* 기존방식 : CSR 
    * CSR 은 프론트서버에서 다시 브라우저로 돌아오는데 모든 사이트를 다 담아서 돌아옴
    * 받아온 후에는 백엔드를 통해서 데이터만 받아옴
* 검색엔진 -> 서버사이드 렌더링 필요 , 그렇지 않다면 리엑트만
* 리액트 -> 고객경험 중시한다면 리액트 그렇지 않아도 된다면 html, css
* 관계 중심 -> sql / 로그 쌓일 때 , 관계가 없을 때 -> mongodb

## install 
* `npm init`
* `npm i next` or `npm i next@9`
* `npm i react react-dom`
* `npm i prop-types`
* `npm i eslint -D`
* `npm i eslint-plugin-import -D`
* `npm i eslint-plugin-react -D`
* `npm i eslint-plugin-react-hooks -D`
* `npm i antd styled-components @ant-design/icons`

## step 
1. `npm init`
2. `npm i next` or `npm i next@9`
3. `package.json` `"test": "echo \"Error: no test specified\" && exit 1"` -> `"dev": "next"`
4. `pages` 폴더 만들기 : 이름이 꼭 **pages** 여야 한다. next는 pages를 인식
    * `pages` 안에서 폴더 생성 가능
5. `npm run dev`
6. err -> `npm i react react-dom`
7. `npm i prop-types`

## Next
* `package.json` `"test": "echo \"Error: no test specified\" && exit 1"` -> `"dev": "next"`
* `pages` 폴더 만들기 : 이름이 꼭 **pages** 여야 한다. next는 pages를 인식
* `Link` `import Link from 'next/link';`
* **Live server** 의 기능 react 의 `hot loader` 기능도 next는 가지고 있음

## eslint
* `npm i eslint -D`
* `npm i eslint-plugin-import -D`
* `npm i eslint-plugin-react -D`
* `npm i eslint-plugin-react-hooks -D`
* `package.json` 에서 확인 가능
* `.eslintrc` 파일 생성
    * 맥에서는 숨김기능 / 확장자는 없음

## style
* `antd` `styled-components` `npm i antd styled-components @ant-design/icons`

## git 
* `rm .git/index.lock` 
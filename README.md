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

## 중앙저장소 역할 
* React Context API
    * 요청, 성공, 실패를 모두 구현해주어야 함
    * `useEffect()` axios
* Redux
    * 장점: 원리가 간단해서 에러 확률이 적음 / 단점 : 코드량이 많음
* MobX
    * 장점 : 코드가 간단함 / 단점 : 에러추적이 어려움
* graphQL 아폴로

## 비동기 STEP
1. 요청
2. 성공 
3. 실패

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
* `npm i redux`
* `npm i next-redux-wrapper` err `--legacy-peer-deps`
* `npm i react-redux`

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
* 공통파일 처리는 `_app.js` 파일 내 
* `<head></head>` 를 커스텀 하고 싶을 땐 `import Head from 'next/head'`

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
* `antd` 연결은 Next.js 의 공통파일에 적용되는 `_app.js`에 css 적용 (참고 _ antDesign 홈페이지 doc)

### 인라인 스타일 주의점
* `<div style={{ marginTop: '10' }}>`
* 리렌더링 될 때마다 객체가 새로 생기며 불변성의 원칙으로 {}==={} false 의 결과 를 초래
* styled-components를 사용해서 스타일을 입혀야함

## 리렌더링
* 함수 안에 있는 부분이 처음부터 끝까지 다시 실행
* `useCallback` , `useMemo` 배열이 바뀌지 않는 이상 같은걸로 침 -> 바뀐것이 없는 것으로 처리
* retrun 이 virtual Dom
* 리턴 부분중 달라진 부분을 다시 그림
* 리렌더링 될 때마다 객체가 새로 생기며 불변성의 원칙으로 {}==={} false 의 결과 를 초래

## useCallback 과 useMemo 
* 최적화 시켜주기 위해서는 함수 사용시 `useCallback` 항상 사용
* `useCallback` 은 함수를 캐싱, `useMemo` 는 값을 캐싱
* style `useMemo` 사용 예_ `const style = useMemo(()=>({marginTop: 10}), [])`

## git 
* `rm .git/index.lock` 

## npm
* [npm trend 사이트](https://www.npmtrends.com/)

---

## Redux
* next Redux wrapper
* front > store 폴더 생성 > configureStore.js 파일 생성
* `npm i redux`
* `npm i next-redux-wrapper --legacy-peer-deps`
* store > app.js 설정 (redux 처럼 provider를 감싸주진 않는다)
* frong > reducers 폴더 생성 > index.js 파일 생성

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
        * prerender : 검색엔진일 때만 html을 완성해서 주고, 일반 유저는 loading 창 (기존 리액트 방식)
        * ⭐️serverside rendering 과 code Splitting은 실무에서 꼭 적용해야 함
* Next.js 가 필요 없는 페이지 (React) : admin 페이지
* React 로 serverside rendering : #reactGo
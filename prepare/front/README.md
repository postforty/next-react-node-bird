# Next.js를 이용한 NodeBird SNS

## 환경 설정

- npm init
- Next.js 버전 이슈
  - 내용 : 강의를 따라 Next.js 9버전을 설치했으나 "Error: error:0308010C:digital envelope routines::unsupported" 에러 발생
  - 해결
    - Node 버전(Node.js v18.12.1)과 Next의 버전 호완성 문제로 보임
    - npm i next (Next.js 9버전 삭제 후 13버전 설치)
- npm i prop-types (타입스크립트를 사용하고 있지 않아 대신하기 위해 설치)

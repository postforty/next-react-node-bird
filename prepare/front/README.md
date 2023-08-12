# Next.js를 이용한 NodeBird SNS

## 환경 설정

- npm init
- npm i next@9 (Next.js 9버전 설치)
- 이슈
  - 내용 : "Error: error:0308010C:digital envelope routines::unsupported"
  - 해결
    - Node 버전(Node.js v18.12.1)과 Next의 버전 호완성 문제로 보임
    - npm i next (Next.js 13버전 설치)

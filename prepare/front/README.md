# Next.js를 이용한 NodeBird SNS

## 환경 설정

- npm init
- Next.js 버전 이슈
  - 내용 : 강의를 따라 Next.js 9버전을 설치했으나 "Error: error:0308010C:digital envelope routines::unsupported" 에러 발생
  - 해결
    - Node 버전(Node.js v18.12.1)과 Next의 버전 호완성 문제로 보임
    - npm i next (Next.js 9버전 삭제 후 13버전 설치)
- npm i prop-types (타입스크립트를 사용하고 있지 않아 대신하기 위해 설치)
- 코드 깔끔하게 관리(개발 모드 한정: -D)
  - npm i eslint -D
  - npm i eslint-plugin-import -D
  - npm i eslint-plugin-react -D
  - npm i eslint-plugin-react-hooks -D
- CSS 프레임워크
  - npm i antd styled-components @ant-design/icons (andt, styled-components 사용)
- 캐로셀
  - npm i react-slick

## 환경 설정(리덕스)

- 중앙 데이터 저장소
- 리덕스 특징: 코드량은 많지만 에러 추적이 쉬워 안정적임(Mobx는 코드량은 적지만 에러 추적 어려움)
- 비동기를 다룰때는 실패에 대비해야(Context API: 요청, 성공, 실패를 직접 구현해줘야 함. 따라서 비동기 데이터를 다룰때는 Redux를 쓰는 것이 유리)
- npm i next-redux-wrapper
- npm i redux
- npm i react-redux
- enhancer
  - npm i redux-devtools-extension (composeWithDevTools로 크롬의 redux extension을 이용해 개발단계에서 상태 모니터링을 효과적으로 할 수 있음)

## 기억할 것!

### 섹션 1. antd 사용해 SNS 화면 만들기

#### 리렌더링 이해하기

- useCallBack(): 함수 캐싱
  - onChange에 적용할 함수 정의시 사용하여 성능 최적화
- useMemo(): 값을 캐싱
  - 스타일 값을 캐싱하여 성능 최적화
  - <div style={{ marginTop: 10 }}> 처럼 style 내에 객체를 사용할 수 있지만 {} === {}는 false이기 때문에 리렌더링시 동일한 값임에도 불구하고 다시 그리게 됨
  - 리액트는 이전 컴포넌트의 버츄어돔과 새로운 컴포넌트의 버츄어돔을 비교하여 변경된 것을 리렌더링하는데 style 객체의 경우 값의 변경 없이 동일한데 불필요한 리렌더링을 진행하게됨
  - useMemo(), styled-components 등을 이용해 이 문제를 해결(성능 최적화)할 수 있음

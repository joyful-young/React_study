# Project1 - 카운터 앱 만들기

- 숫자를 더하고 빼는 간단한 기능의 앱 만들기

## 프로젝트 준비하기

### 요구사항 분석하기 - 어떤 설계와 기능으로 구현할지 살펴보기

- 현재의 카운트를 표시하는 영역, 카운트를 제어하는 영역이 필요
- App 컴포넌트: Viewer와 Controller 컴포넌트 감싸는 템플릿
- Viewer 컴포넌트: 현재의 카운트를 표시
- Controller 컴포넌트: 카운트를 제어할 수 있는 기능 제공

<br/>

- "하나의 컴포넌트는 단 하나의 역할만 수행한다."

### 리액트 앱 만들기

- `$ yarn create vite project1 --template react`

### Vue로 만들어보자

- `project1-vue`
- count 변수를 app.vue에 정의
- Controller 컴포넌트에서 버튼을 누르면 emit으로 버튼의 값을 app.vue에 전달
- 버튼의 값에 따라 count 변수 조절해서 Viewer 컴포넌트에 props로 내려줌
- Viewer 컴포넌트에서 interpolation으로 출력

<br/>

- props & emit으로 데이터 전달하는 건 부모-자식 컴포넌트 사이여야 함
- controller와 viewer 사이 직접 전달은 안 됨
- count를 두 컴포넌트의 부모 컴포넌트인 app에 정의해놓고 controller에서 발생한 이벤트에 따라 값을 바꿔서 viewer로 전달하는 게 좋겠다고 판단

### State Lifting (State 끌어올리기)

- 리액트는 State 값이나 set 함수를 여러 컴포넌트에서 사용하는 경우, 이들을 상위 컴포넌트에서 관리
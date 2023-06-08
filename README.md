# React_study

- 공부하면서 의문점이나 기억해둘 것, 느낀점 정리
- Vue와 비교

## console이 두번씩 찍힌다? - StrictMode

- 컴포넌트가 렌더링되는 걸 확인하기 위해 로그를 찍으면 두번씩 나오는 걸 확인
- 컴포넌트 함수가 두번씩 호출된다는 것인데, 구글에 검색해보니 `StrictMode` 때문이라고 함
- `<StrictMode></StrictMode>` 사이에 react 컴포넌트를 작성하면 오류를 검사하기 위해 렌더링 단계에서 의도적으로 함수를 두 번 호출한다고 한다.
- StrictMode는 개발 환경에서만 이중 호출되고 배포 단계에서는 영향을 끼치지 않는다.

## 자식 컴포넌트는 부모 컴포넌트가 리렌더될 때 같이 리렌더됨

- 부모 컴포넌트의 State가 변해서 리렌더될 때 자식 컴포넌트에서는 리렌더될 이유가 없는 경우에도 리렌더될 수 있음
- 웹 브라우저 성능 저하 요인
- 최적화 기법이 있음

## React Hook

- *함수로 만든 리액트 컴포넌트에서 클래스로 만든 리액트 컴포넌트의 기능을 이용하도록 도와주는 함수*
- 이전까지 함수로 만든 컴포넌트에서 State나 Ref와 같은 기능을 사용할 수 없어서 대부분 클래스로 컴포넌트를 만들었는데, 코드가 많고 문법이 간결하지 못해 불편
- `useState`, `useRef`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`
- [공식문서 - React Hook](https://react.dev/reference/react)

## Project1 - 카운터 앱 만들기

[project1](./project1/README.md)

### 리액트의 데이터 전달 특징

- Props로 State 값과 set 함수 전달
- `State Lifting (State 끌어올리기)`

```javascript
function App() {
  // count, setCount 정의. count 초기값은 0
  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  )
}
```

#### Props

- Vue와 마찬가지로 컴포넌트 간에 데이터를 전달할 때 Props를 사용

- 차이점
  - props 전달 형태의 차이
    - Vue의 경우 자식 컴포넌트에서 props의 데이터 타입을 알려주면 data를 쓰듯이 바로 사용할 수 있다.
    - 여러 개의 데이터를 전달하더라도 각각 데이터 타입을 알려줘서 바로 사용하면 된다.
    - React의 경우는 props로 여러 개의 데이터를 전달할 때 하나의 객체 형태로 묶여서 전달된다.
    - 그래서 각 데이터를 개별로 사용하려면 점 표기법을 이용해서 접근하거나 구조 분해 할당을 이용해야 한다.
  - State 값을 변경할 수 있는 set 함수를 props로 전달
    - Vue는 emit을 통해 자식에서 부모로 데이터를 전달
    - React는 부모 컴포넌트에서 State와 set 함수를 관리하면서 자식 컴포넌트에 set 함수를 전달하여 State를 대신 변경할 수 있게 함


- 공통점
  - `단방향 데이터 흐름`
    - props의 전달 방향은 언제나 부모 -> 자식
    - 데이터의 흐름을 쉽게 이해할 수 있어 관리하기 좋다.
  - 이벤트는 아래에서 위로

## 리액트 컴포넌트 라이프 사이클

- 3단계로 구분
- `Mount -> Update -> Unmount`
- `Mount(탄생)`: 컴포넌트를 페이지에 처음 렌더링할 때
- `Update(갱신)`: State나 Props의 값이 바뀌거나 부모 컴포넌트가 리렌더해 자신도 리렌더될 때
- `Unmount(죽음)`: 더 이상 페이지에 컴포넌트를 렌더링하지 않을 때

<br/>

- `useEffect`를 이용해 라이프 사이클을 제어할 수 있다.

### useEffect - Vue의 watch와 비슷한 것 같다. 비교해서 내용 정리!!!

- *어떤 값이 변경될 때마다 특정 코드를 실행하는 리액트 훅*
- `useEffect(callback, [deps])`
- `[deps]`: 의존성 배열. Dependency Array
- useEffect는 의존성 배열 요소의 값이 변경되면 첫 번째 인수로 전달한 콜백 함수를 실행함

```javascript
useEffect(() => {
  console.log("count 업데이트: ", count)
}, [count])
```

- State 값을 초기화할 때도 useEffect가 이 변화를 감지한다.
# React_study

## 공부하면서 의문점, 기억해둘 것

### console이 두번씩 찍힌다?

- 컴포넌트가 렌더링되는 걸 확인하기 위해 로그를 찍으면 두번씩 나오는 걸 확인
- 컴포넌트 함수가 두번씩 호출된다는 것인데, 구글에 검색해보니 `StrictMode` 때문이라고 함
- `<StrictMode></StrictMode>` 사이에 react 컴포넌트를 작성하면 오류를 검사하기 위해 렌더링 단계에서 의도적으로 함수를 두 번 호출한다고 한다.
- StrictMode는 개발 환경에서만 이중 호출되고 배포 단계에서는 영향을 끼치지 않는다.

### 자식 컴포넌트는 부모 컴포넌트가 리렌더될 때 같이 리렌더됨

- 부모 컴포넌트의 State가 변해서 리렌더될 때 자식 컴포넌트에서는 리렌더될 이유가 없는 경우에도 리렌더될 수 있음
- 웹 브라우저 성능 저하 요인
- 최적화 기법이 있음

### React Hook

- *함수로 만든 리액트 컴포넌트에서 클래스로 만든 리액트 컴포넌트의 기능을 이용하도록 도와주는 함수*
- 이전까지 함수로 만든 컴포넌트에서 State나 Ref와 같은 기능을 사용할 수 없어서 대부분 클래스로 컴포넌트를 만들었는데, 코드가 많고 문법이 간결하지 못해 불편
- `useState`, `useRef`, `useEffect`, `useContext`, `useReducer`, `useCallback`, `useMemo`
- [공식문서 - React Hook](https://react.dev/reference/react)


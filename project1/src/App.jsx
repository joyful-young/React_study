import './App.css'
import { useRef, useEffect, useState } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'

function App() {
  const didMountRef = useRef(false)
  // count, setCount 정의. count 초기값은 0
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const handleSetCount = (value) => {
    setCount(count + value)
  }
  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  // useEffect(callback, [deps])
  // [deps]: 의존성 배열. Dependency Array
  // useEffect는 의존성 배열 요소의 값이 변경되면 첫 번째 인수로 전달한 콜백 함수를 실행함
  // 의존성 배열에 아무것도 전달하지 않으면 컴포넌트를 렌더링할 때마다 콜백 함수 실행
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
    } else {
      console.log("컴포넌트 업데이트")
    }
  })

  // 의존성 배열에 빈 배열 전달하면 컴포넌트의 마운트 시점에만 콜백 함수 실행
  useEffect(() => {
    console.log("컴포넌트 마운트")
  }, [])

  // // 클린업
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡")
  //   }, 1000)

  //   return () => {
  //     console.log("클린업")
  //     clearInterval(intervalID)
  //   }
  // })

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {/* 단락 평가. count가 짝수일 때 Even 컴포넌트 렌더링 */}
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  )
}

export default App

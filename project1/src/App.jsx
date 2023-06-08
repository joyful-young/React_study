import './App.css'
import { useRef, useEffect, useState } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

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
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
    } else {
      console.log("컴포넌트 업데이트")
    }
  })

  useEffect(() => {
    console.log("컴포넌트 마운트")
  }, [])

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  )
}

export default App

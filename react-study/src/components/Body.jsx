// import React from "react";
import { useRef, useState } from "react";

const Body = () => {
  const [text, setText] = useState("")
  const textRef = useRef()

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleOnClick = () => {
    console.log(textRef.current.value)
    console.log(textRef.current)
    if (text.length < 5) {
      textRef.current.focus()
    } else {
      alert(text)
      setText("")
    }
  }

  return (
    <div>
      <input ref={textRef} type="text" value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  )
};
export default Body;
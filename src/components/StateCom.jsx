import React from 'react'
import { useState } from 'react'

const StateCom = () => {

    const onClickTextChange = ()=>{
        let newText = text.toLocaleUpperCase()
        setText(newText)
        
    }
    const onChanged = (event)=>{
        setText(event.target.value)
    }
    const [text , setText] = useState("hello")
  return (
    <div >
        <h1>{text}</h1>
        <textarea name="text" id="" cols="30" value={text} rows="10" onChange={onChanged}></textarea>
        <button onClick={onClickTextChange}>click to</button>

        <div>
            <h3>characters{text.length}</h3>
        </div>
        <div>
            <h3>words{text.split(" ").length}</h3>
        </div>
        <div>
            <h3> to read   {0.008 * text.split(" ").length }  mins</h3>
        </div>
    </div>
  )
}

export default StateCom
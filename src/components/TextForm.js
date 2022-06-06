import React, { useState } from 'react'

export default function TextForm(props) {

    const headleUpClick = () => {
        // console.log("uppercase  was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const headleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here")

    // text = (new Text)  wrong way to change text
    // setText = (new Text) right way to change text

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={headleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={headleUpClick}>Convert to Uppercase</button>
        </div>)
}



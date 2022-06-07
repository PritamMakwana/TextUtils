import React, { useState } from 'react'

export default function TextForm(props) {

    const headleUpClick = () => {
        // console.log("uppercase  was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const headleLoClick = () => {
        // console.log("lowerCase  was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const headleInitClick = () => {
        // console.log("initCap  was clicked " + text)
        
        let newText = text.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
            return m.toUpperCase();
         });
        setText(newText)
    }


    const headleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    // text = (new Text)  wrong way to change text
    // setText = (new Text) right way to change text

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={headleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={headleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={headleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={headleInitClick}>Convert to initCap</button>
            </div>

            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
                

            </div>
        </>


    )
}



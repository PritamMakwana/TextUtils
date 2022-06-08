import React, { useState } from 'react'

export default function TextForm(props) {

    const headleUpClick = () => {
        // console.log("uppercase  was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert to Upper Case", "success");
    }

    const headleLoClick = () => {
        // console.log("lowerCase  was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to Lower Case", "success");
    }

    const headleInitClick = () => {

        let newText = text.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
            return m.toUpperCase();
        });
        setText(newText)
        props.showAlert("convert to Capitalize Word", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert(" Speak a Data", "success");
    }


    const headleclearClick = () => {
        let newText = '';
        setText(newText)
        console.log("clear: " + text);
        props.showAlert("All clear", "success");
    }


    const headleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)
    }

    const headleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces", "success");
    }



    const [text, setText] = useState("")

    // text = (new Text)  wrong way to change text
    // setText = (new Text) right way to change text

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={headleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={headleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={headleLoClick}>Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={headleInitClick}>Capitalize Word</button>
                <button type="submit" onClick={speak} className="btn btn-primary mx-3">Speak</button>
                <button className="btn btn-primary mx-3 " onClick={headleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-3 " onClick={headleclearClick}>All Clear</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p className="preview">{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>


            </div>
        </>


    )
}



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
            <div className="container " style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={headleOnChange} id="myBox" rows="8" 
                    style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={headleLoClick}>Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={headleInitClick}>Capitalize Word</button>
                <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-3 my-3">Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3 " onClick={headleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3 " onClick={headleclearClick}>All Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={headleUpClick}>Uppercase</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p className="preview">{text.length > 0 ? text : "Nothing to preview!"}</p>


            </div>
        </>


    )
}



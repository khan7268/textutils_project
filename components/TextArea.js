import React, { useState } from 'react'

export default function TextArea(props) {
    const handleOnClick = () => {
        let newText1 = text.toUpperCase();
        setText(newText1)
        props.showAlert("Converted to uppercase ","Successfully")
    }

    const handleLoClick = () => {
        let newText1 = text.toLowerCase();
        setText(newText1)
        props.showAlert("Converted to lowercase ","Successfully")
    }
    const handleClearClick = () => {
        let newText1 = ("");
        setText(newText1)
    }


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Space removed ","Successfully")
    }

    const handleCopy = () => {
        var text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Copied to clipboard ","Successfully")
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    // }

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'White'
    // })

    // const [btnText,setbtnText] =useState("Enable Dark Mode")

    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={ {backgroundColor:props.mode === 'dark'?'#042743':'white' , color: props.mode === 'light'?'black':'white'} }>
                <div className="mb-3" >
                    <h2>{props.heading}</h2>
                    <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8" style={ {backgroundColor:props.mode === 'dark'?'#042743':'white' , color: props.mode === 'light'?'black':'white'} }></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={speak} >Speak</button>
                {/* <button className="btn btn-primary mx-2" onClick={toggleStyle}>{btnText}</button> */}
            </div>

            <div className="container my-3" style={ {backgroundColor:props.mode === 'dark'?'#042743':'white' , color: props.mode === 'light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p> {text.split(/\s+/).filter((element)=> {return element.length !==0}).length} words and {text.length} characters</p>
                <p>You can read this text in {0.008 * text.split(/\s+/).filter((element)=> {return element.length !==0}).length} minutes</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>

        </>

    )
}

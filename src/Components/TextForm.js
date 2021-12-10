import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowerClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange =(e) =>{
        // console.log("On Change");
        setText(e.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.head}</h1>
            <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} > Convert to Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick} > Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} > Clear Text </button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} > Remove Extra Text </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} > Copy Text </button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something above to preview it here"}</p>
        </div>
        </>
    )
}

import React, {useState} from 'react'


export default function TextForm(props) {
    

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }

    const handleLowerClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Clear text successfully", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra space", "success")
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied successfully", "success")
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
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} > Convert to Upper Case</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick} > Convert to Lower Case</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} > Clear Text </button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} > Remove Extra Text </button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} > Copy Text </button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

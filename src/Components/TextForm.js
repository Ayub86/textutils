import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("clicked function :" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const handleLUClick = () => {
    // console.log("clicked function :" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlret1("Coverted to Lower case","success");
  }
  const clearText = () => {
    // console.log("clicked function :" + text);
    let  newtext=('');
    setText(newtext);
  }
  const handleCopy = () => {
    var text= document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
  }
  // const extraSpace = () => {
  //   let newtext= text.split(/[]+/);
  //   setText(newtext.join(" "))
  //    }
  const handleOnChange = (event) => {
    // console.log("change on handle");
    setText(event.target.value)
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="containers" style={{color:props.mode==='dark'?'white':'black'}}  >
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
       </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleLUClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      {/* <button className="btn btn-primary mx-2" onClick={extraSpace}>Extra Space</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summaery</h1>
      <p>Words {text.split(" ").length} and Characters {text.length}</p>
      <p><strong>Time to Read this</strong>: {0.0008 * (text.split(" ").length)} </p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Preview your text Here"}</p>
    </div>
    </>
  )
}

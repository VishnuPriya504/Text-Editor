import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState('');
  //   text="newtext" this is wrong way to change the text value
  //  setText="newtext" this is  Right way to change state
  const handlechange = (e) => {
    console.log("uppercase btn clicked");
    setText(e.target.value);
  };
  const[previousText,setPreviousText]=useState('');

//   let time=(text.split(" ").length)*0.008;
//   just state to store the current text value i.target.value

  const handleclick = () => {
    // setText("you clicked the uppercase btn", +text);
    // without the settext function we cant update the text variable in useeffect
    let newtext = text.toUpperCase();
    setText(newtext);
    console.log("uppercase btn clicked");
  };
  const handleclick2=()=>{
      setText("you clicked the lowercase btn",+ text);
      let newtext1=text.toLowerCase();
      setText(newtext1)
  }
  const handleclick3=()=>{
    setPreviousText(text);
    const newtext2='';
    setText(newtext2);
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const handleUndoClear=()=>{
    let newtext3=previousText;
    setText(newtext3)
}


  return (
    <>
      <div className="container">
        <h1  style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
          // one curly bracket for js and two for the object in the js
            // style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'black':'white'}}
            // style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
            value={text}
            onChange={handlechange}
            className="form-control "
            placeholder="Enter Your Text Comments"
            id="myBox"
            rows="8"
          ></textarea> </div>
          <button onClick={handleclick} className="btn btn-primary mx-1">
            UpperCase
          </button>
          <button onClick={handleclick2} className="btn btn-primary mx-1">
          LowerCase
        </button>
     
       
        <button type="submit" onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy To clipboard</button>
        <button type="submit" onClick={handleUndoClear} className="btn btn-primary mx-2 my-2">Undo</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

        <button onClick={handleclick3} className="btn btn-outline-danger mx-1">
        Clear
      </button>
        
        


          </div>
      <div
      // style={{color:props.mode==='dark'?'white':'black'}}

      className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length}Time</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Any Text to Preview"}</p>
        </div>
     
    </>
  );
}

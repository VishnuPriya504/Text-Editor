
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
function App() {
  const [mode,setMode]=useState('light');
  const togglemode=()=>{
    if(mode==='dark')
    {
      setMode('light'); 
      document.body.style.backgroundColor='white';
    }
    else{
     setMode('dark');
     document.body.style.backgroundColor='#042743';

    }
   
  }

  return (
    <>
  
    
<Navbar title="TextEditor" mode={mode} togglemode={togglemode}/>
<div className='container my-3'>"
<TextForm heading="Enter the text to analyse" mode={mode}/>


</div>



   
    </>
 
  );
}

export default App;

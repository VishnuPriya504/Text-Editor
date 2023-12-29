
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
    }
    else{
     setMode('dark');
    }
   
  }

  return (
    <>
  
    
<Navbar title="TextEditor" mode={mode} togglemode={togglemode}/>
<div className='container my-3'>
<TextForm/>


</div>



   
    </>
 
  );
}

export default App;

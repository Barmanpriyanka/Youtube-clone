import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [toggledrawersidebar,settogledrawersidebar]=useState({
    display:"none"
  });
  const toggledrawer=()=>{
    if(toggledrawersidebar.display==="none"){
      settogledrawersidebar({
        display:"flex",
      });
    }else{
      settogledrawersidebar({
        display:"none",
      });
    }
  }
  const [editcreatechanelbtn ,seteditcreatechanelbtn] =useState(false)
  const[videouploadpage,setvideouploadpage]=useState(false);
  return (
    <Navbar seteditcreatechenelbtn={seteditcreatechanelbtn }/>
  );
}

export default App;

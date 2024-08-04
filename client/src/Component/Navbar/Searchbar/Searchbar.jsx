import React,{useState} from 'react'
import "./searchbar.css"
import {BsMicFill} from "react-icons/bs"
import {FaSearch} from "react-icons/fa"
import Searchlist from './Searchlist'
import {Link} from 'react-router-dom'

const Searchbar = () => {
    const [Searchquery,setsearchquery] = useState("")
    const [searchlist,setsearchlist]=useState(false)
    const Titlearray=["video1","video2","animation video","Movies"].filter(q=>q.toUpperCase().includes(Searchquery.toUpperCase()))
  return (
   <>
   <div className="SearchBar_Container">
    <div className="SearchBar_Container2">
        <div className="search_div">
            <input type="text" classname='iBox_searchBar' placeholder='Search' onChange={e=> setsearchquery(e.target.value)} value={Searchquery} onClick={setsearchlist(true)}/>
        </div>
    </div>
   </div>
   </>
  )
}

export default Searchbar

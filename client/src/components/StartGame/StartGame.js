import React, {useState, useEffect} from 'react'
import './StartGame.scss'
import Popup from 'reactjs-popup'
import API from '../../utils/API'


function StartGame(props){









  

    return(<div className='startGame'>
       <button onClick={()=>API.newGame({email:props.user.email})} className=''> Start New Game </button>
       
    </div>)
}

export default StartGame
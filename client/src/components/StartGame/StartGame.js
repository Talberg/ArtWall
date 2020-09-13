import React, {useState, useEffect} from 'react'
import './StartGame.scss'
import Popup from 'reactjs-popup'
import API from '../../utils/API'


function StartGame(props){
    function NewGame(){
        API.newGame({email:props.user.email}).then(
            window.location.replace('/profile')
        )
    }









  

    return(<div className='startGame'>
       <button className='btn-block btn' onClick={NewGame} > Start New Game </button>
       
    </div>)
}

export default StartGame
import React from 'react'
import './Home.scss'
import AddFriend from '../AddFriend/AddFriend'
import RequestBox from '../RequestBox/RequestBox'
import FriendsList from '../FriendsList/FriendsList'
import StartGame from '../StartGame/StartGame'
import GameDisplay from '../GameDisplay/GameDisplay'
import GameCard from '../GameCard/GameCard'
import TextArea from '../TextArea/TextArea'
import Auth from '../../pages/Auth/index'

function Home(props){
    console.log(props)
return(<>{props.user.loggedIn ? <div className='home'>


<GameDisplay user={props.user}></GameDisplay>





</div> :
    
    <><Auth {...props} action="login" /></> }</>)
}
export default Home
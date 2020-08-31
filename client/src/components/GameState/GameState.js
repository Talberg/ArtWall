import React,{useEffect,useState} from 'react'   
import './GameState.scss'
import GameCard from '../GameCard/GameCard'
import Map from '../Map/Map'
import API from '../../utils/API'
import TextArea from '../TextArea/TextArea'

function GameState(props){
    
    const [game,saveGame]=useState()
    const [loaded,setLoaded] = useState({
        loaded:false
    })
    const [rooms, setRooms] = useState( )
    const [savedGame,setSave] = useState( )
    const [currentState,setState] = useState( )



    function loadGame(){
     return( API.loadGame(window.location.pathname))
    }
    function fullLoad(){
        setLoaded({loaded:true})
        // this is where the save point will be rea bot for now it will just bwe a one off thing. 
        //function that will start the game using the into values
        console.log(game.game.game.intro.dialog)
        setState(game.game.game.intro)

    }


useEffect(()=>{
    //need to get the data from the DB  by using _id passed through then grabbed by the rec.params part of a GET route 
    loadGame().then(res=>{
        console.log(res)
        //save the data that is coming back in the state
        saveGame(res.data)
       
        
    }).then(log=>{
        
    })


    console.log(window.location.pathname)
},[])
useEffect(()=>{
    //need to save the new opject to the database everytime the rooms object is updated 
console.log('not saving')
console.log(game)
{game ? fullLoad()  :
    console.log('didnt work') }
    
    console.log(rooms)

},[game])

    useEffect(
    ()=>{
        //need to save the game to the data base everything the rooms object is changed
         if(rooms){   API.saveGame(window.location.pathname,rooms)
        console.log(rooms)}
     
        

        
    },
    [rooms]

)








return(<div  >
   
    {loaded.loaded ? <> 
      <div className='home'>
    <div className='row bigRow' > 
    <div className='col-2 '> <GameCard></GameCard> </div>
    {console.log(rooms)}
    {console.log('game')}
    
    <TextArea changeState={setState} state={currentState}  game={game.game.game}  img='src here' responses='next' text={currentState.dialog}  ></TextArea>
  
    
    </div>
</div> </> : <></> }
    
    {/* {rooms ? <><Map user={props.user} changeState={setRooms} rooms={rooms} ></Map></>:<> <h1>LOADING!!!!</h1></>} */}
</div>)
}


export default GameState
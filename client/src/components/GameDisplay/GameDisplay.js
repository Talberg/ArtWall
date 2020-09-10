import React from 'react'
import './GameDisplay.scss'
import StartGame from '../StartGame/StartGame'
import Popup from 'reactjs-popup'


function GameDisplay(props) {
    //props.user.user
    //{user: {…}}
    //user:
    //request: []
    //friends: (7) ["user1@email.com", "user2@email.com", "user2@email.com", "user2@email.com", "user2@email.com", "user2@email.com", "user2@email.com"]
    //games: ["5e9a079f6f5de123ec7cef67"]
    //admin: false
    //createdAt: "2020-04-16T19:15:10.168Z"
    //_id: "5e98af14882e704004ed5a29"
    //username: "user2"
    //password: "$2b$10$krpasccbNzjf/f8ibTaAI.tG.PLjujYBRCWe.rlTATN46ADCpO.7W"
    //email: "user2@email.com"
    let user = props.user.user
    let CurrentGameIndex = user.games.length - 1
    let game = user.games[CurrentGameIndex]



    // {<ul>
    //     {user.games.map(game => {
    //         console.log(game)
    //         return (<li> {game}
    //             {/* use an route to get the game object by finding by id */}
    //             <hr /> <button onClick={() => { gameLink(game) }} >Start</button>




    //         </li>


    //         )
    //     })}
        
    // </ul>}


    console.log(game)
    function gameLink(game_id) {
        document.location = `${game_id}`
    }
    return (<div className='gameDisplay col-md-4 offset-4' >
        <h4>Games</h4>

        <hr></hr>



        <StartGame user={user}></StartGame>
        <br />
        <h5  >  Current Game </h5>
        <hr />
        <ul>
            {/* make a .Map function that will map through and return a <li> that has the buttons and name of the game */}
            {/* need to make the Start button Link to the correct page using :id route*/}
            {/* need to make the Players Button Show a list of Players in that game */}
            {/* make GameName show the name of the game that is looked up with the _id */}

            <li>Current Game
                    <hr /> <button onClick={() => { gameLink(game) }} >Start</button>
            </li>
            </ul>

          
            
          
    </div>)
}

export default GameDisplay
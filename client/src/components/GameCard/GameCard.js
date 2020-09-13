import React from 'react'
import './GameCard.scss'
import EndTurn from '../EndTurn/EndTurn'
import PlayerCard from '../PlayerCard/PlayerCard'

function GameCard(props) {
    let rooms= props.rooms
    let setRooms = props.setRooms
    let player= props.player
    let saveState = props.rooms.game[props.rooms.save]
    let save = saveState.next
    let InBackpack= rooms.save === "Backpack"
    let allThree = rooms.checkPoint.lizard&&rooms.checkPoint.sandWorm&&rooms.checkPoint.hole

    console.log(InBackpack)
    function showBackpack(){
        if(allThree){
            setRooms({
                ...rooms,
                checkPoint:{
                    ...rooms.checkPoint,
                    allThree:true
                }
                ,
                
            })
        }
        setRooms({
            ...rooms,
            game:{
                ...rooms.game,
                Backpack:{
                dialog:'You open your backpack and you see:',
                backpack:[...player.bag],
                back:rooms.save,
                next:rooms.save
                }


            },
            save:'Backpack'
        })
    }
    


    return (
        <><div className='gameCard'>


            <div className='row'>

    <div className='col-12 Title'> <p> Health:  {player.health}/{player.maxHP}</p></div>
    <div className='col-12 Title '> <p> Magic Power: {player.MP}/{player.maxMP}</p></div>
                <div className='col-12 Title'> <p> Stats: </p></div>
                <div className='col-6 statz'> <p> Sneak:+ {player.sneak} </p></div>
                <div className='col-6 statz'> <p> Strength:+ {player.strength} </p></div>
                <div className='col-6 statz'> <p> Magic:+ {player.magic} </p></div>
                <div className='col-6 statz'> <p> Speech:+ {player.speech} </p></div>
                <br></br>
                <br></br>

                <div className='col-12 Title'> <p> Equipment: </p></div>
                <div className='col-4 equipment1'> <p>Hand</p>  </div>
                <div className='col-4 equipment1'> <p>Body</p>  </div>
                <div className='col-4 equipment1'> <p>Head</p>  </div>
                <div className='col-4 equipment1'> <p alt={player.weapon}>{player.weapon}</p>  </div>
                <div className='col-4 equipment1'> <p>{player.body}</p>  </div>
                <div className='col-4 equipment1'> <p>{player.head}</p>  </div>
                <div className='col-12 Title'> <button disabled={InBackpack} onClick={showBackpack}> Open Backpack</button></div>
                <div className='col-12 Title '> <p> <ul>
                        {player.bag.map(item=>{
                            return(<li>{item}</li>)
                        })}
                                </ul> </p></div>
              {/* This will be where the backpack is maped through  */}
                



            </div>



        </div></>
    )
}
export default GameCard
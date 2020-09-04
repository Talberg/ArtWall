import React from 'react'
import './GameCard.scss'
import EndTurn from '../EndTurn/EndTurn'
import PlayerCard from '../PlayerCard/PlayerCard'

function GameCard(props) {
    let PlayerStats = {
        sneak: 1,
        strength: 1,
        magic: 1,
        speech: 1,
        health: 20,
        MP: 10,
        bag: {
            Book1:['Heal','FireBall','MindControl'],
            LongSword1:['attack+3','Long pointy thing, adds 3 to your combat rolls',"equip"],
            Staff1:['magic+3','You feel magic in the wood, adds 3 to all magic rolls','equip'],
            MegaPhone1:['speech+3','Yelling into this makes people hear you better, add 3 to all speech rolls','equip'],

        }
            

        ,
        hand: false,
        head: false,
        body: false,




    }
    let player= props.player


    return (
        <><div className='gameCard'>


            <div className='row'>

                <div className='col-12 Title'> <p> Health:  {player.health}</p></div>
                <div className='col-12 Title '> <p> Magic Power: {player.MP}</p></div>
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
                <div className='col-4 equipment1'> <p>{player.hand}</p>  </div>
                <div className='col-4 equipment1'> <p>{player.body}</p>  </div>
                <div className='col-4 equipment1'> <p>{player.head}</p>  </div>
                <div className='col-12 Title'> <p> Backpack: </p></div>
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
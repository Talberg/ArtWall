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


    return (
        <><div className='gameCard'>


            <div className='row'>

                <div className='col-12 Title'> <p> Health:  {PlayerStats.health}</p></div>
                <div className='col-12 Title '> <p> Magic Power: {PlayerStats.MP}</p></div>
                <div className='col-12 Title'> <p> Stats: </p></div>
                <div className='col-6 statz'> <p> Sneak:+ {PlayerStats.sneak} </p></div>
                <div className='col-6 statz'> <p> Strength:+ {PlayerStats.strength} </p></div>
                <div className='col-6 statz'> <p> Magic:+ {PlayerStats.magic} </p></div>
                <div className='col-6 statz'> <p> Speech:+ {PlayerStats.speech} </p></div>
                <br></br>
                <br></br>

                <div className='col-12 Title'> <p> Equipment: </p></div>
                <div className='col-4 equipment1'> <p>Hand</p>  </div>
                <div className='col-4 equipment1'> <p>Body</p>  </div>
                <div className='col-4 equipment1'> <p>Head</p>  </div>
                <div className='col-4 equipment1'> <p>{PlayerStats.hand}</p>  </div>
                <div className='col-4 equipment1'> <p>{PlayerStats.body}</p>  </div>
                <div className='col-4 equipment1'> <p>{PlayerStats.head}</p>  </div>
                <div className='col-12 Title'> <p> Backpack: </p></div>
              {/* This will be where the backpack is maped through  */}
                



            </div>



        </div></>
    )
}
export default GameCard
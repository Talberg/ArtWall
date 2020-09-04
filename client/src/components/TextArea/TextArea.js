import React from 'react'
import ImageHolder from '../ImageHolder/ImageHolder'
import API from '../../utils/API'
var d20 = require('d20')

function TextArea(props) {
    let setRooms = props.setRooms
    let rooms = props.rooms
    let player = props.rooms.player
    let saveState = props.rooms.game[props.rooms.save]
    let save = saveState.next
    console.log(save)
    console.log(saveState)
    let dialog = saveState.dialog

    function pickup(){
        setRooms({
            ...rooms,
            save:save,
            player:{
                ...player,bag:[...player.bag,saveState.item]
            }

        })
    }


    function checkpoint() {
        console.log(save)
        setRooms({
            ...rooms, checkPoint: { ...rooms.checkPoint, [saveState.checkpointReached]: true }, save: save
        })
    }


    function roll() {
        return Math.floor(Math.random() * Math.floor(21));
    }

    function damage(damage) {
        // change the health value on the 
        let newHealth = parseInt(player.health) - parseInt(damage)
        console.log(Object.keys(saveState))
        setRooms({
            ...rooms, save: save,
            player: {
                ...player, health: newHealth
            }
        })


    }
    function movement(place) {
        // set the location of the 
        let split = place.split(' ')
        let join = split.join('')


        setRooms(
            {
                ...rooms, save: join
            }
        )
    }


    function button(buttonValue) {
        function roll() {
            return Math.floor(Math.random() * Math.floor(21));
        }

        //find the correct function and run it here 
        let split = buttonValue.split(' ')
        console.log(split[0])
        let join = split.join('')
        console.log(join)
        console.log(props.game)
        



        let rollvalue = parseInt(roll())
        console.log(rollvalue)
     
        console.log(rollvalue)
        let action = API[join](rollvalue)
        console.log(action)
        console.log(props.game[action])
        // change rooms here **************************************************************************

  if(split[0]==='Attack'){
           let newRoll= roll()+parseInt(player.strength)
           console.log('attack mod')
           setRooms({ ...rooms, save: action})
       }
  if(split[0]==='Run'){
           let newRoll= roll()+parseInt(player.strength)
           console.log('attack mod')
           setRooms({ ...rooms, save: action})
       }
  if(split[0]==='Move'){
           let newRoll= roll()+parseInt(player.strength)
           console.log('attack mod')
           setRooms({ ...rooms, save: action})
       }
  if(split[0]==='Ask'){
           let newRoll= roll()+parseInt(player.speech)
           console.log('speech')
           setRooms({ ...rooms, save: action})
       }
  if(split[0]==='Sneak'){
           let newRoll= roll()+parseInt(player.sneak)
           console.log('attack mod')
           setRooms({ ...rooms, save: action,lastRoll:newRoll})
       }
       else{
           setRooms({
            ...rooms, save: action
        })
       }
        
    }

    function next() {
        console.log(props.game[saveState.next])
        props.changeState(props.game[saveState.next])
        let newSave = props.rooms.game[props.rooms.save].next
        console.log(newSave)
        //ROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOMS
        props.setRooms({
            ...props.rooms, save: newSave
        })

        console.log(props.state)
    }

    return (
        <div className='col-8 display '>
            {/* this should be made into a componet and then fed in the values with props */}
            <div className='holder col-12'> <div className='textHolder speech-bubble '>
                
    <p>{rooms.checkPoint[saveState.checkpoint]? <>{saveState.dialog2}</>:<>  {saveState.dialog}</>} </p><div className='col-4 ' >



                <div className='Next' >
                    {/* if the checkpoint is reached  */}
                    {saveState.back ? <button onClick={() => movement(saveState.back)}>Back</button> : <></>}
                    {saveState.item ? <button onClick={pickup} >Pick up {saveState.item}</button>:<>  {rooms.checkPoint[saveState.checkpoint] === true
                        ? <>
                            <button onClick={() => movement(saveState.enter)}  > {saveState.enter} </button>
                        </>
                        : <> {saveState.checkpointReached
                            ?
                            <button onClick={() => checkpoint()} > Checkpoint</button>
                            : <> {saveState.damage
                                ? <>
                                    <button onClick={() => damage(saveState.damage)} > TAKE DAMAGE</button></> : <>
                                    {/* if there is a choice value the do this */}
                                    {saveState.choice
                                        ? <> {saveState.choice.map(choice => {
                                            return (<button onClick={() => button(choice)}   >{choice}</button>)
                                        })}</>
                                        : <> {saveState.movement
                                            ? <>
                                                {/* if all tou can do is move the state will only have the values of movement */}
                                                {saveState.movement.map(button => {
                                                    return (<button onClick={() => movement(button)}> {button}</button>)
                                                })}</>
                                            : <><button onClick={next}>Next</button> </>}
                                        </>}</>}</>}</>}</>}
                  
                    {/* if damage is true then take the damage */}






                </div>
            </div>

            </div>
            </div>
            <div className='holder col-12'>
                <ImageHolder src={saveState.src} ></ImageHolder>
            </div>
        </div>
    )
}
export default TextArea 
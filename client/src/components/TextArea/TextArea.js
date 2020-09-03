import React from 'react'
import ImageHolder from '../ImageHolder/ImageHolder'
import API from '../../utils/API'
var d20 = require('d20')

function TextArea(props){
    let rooms = props.rooms
    let player= props.rooms.player
    let saveState = props.rooms.game[props.rooms.save]
    console.log(saveState)

    function roll() {
        return Math.floor(Math.random() * Math.floor(21));
      }
      
      function damage(damage){
          // change the health value on the 
          let newHealth=  parseInt(player.health)- parseInt(damage) 
          console.log(newHealth)
          

          
      }
      function movement(place){
          // set the location of the 

      }
   
    
     function button( buttonValue){
        function roll() {
            return Math.floor(Math.random() * Math.floor(21));
          }
         //find the correct function and run it here 
        let split=  buttonValue.split(' ')
        let join= split.join('')
        console.log(join)
        console.log(props.game)
        
        
      
        let rollvalue = parseInt(roll())
        console.log(rollvalue)
        let action = API[join](rollvalue)
        console.log(action)
        console.log(props.game[action])

        props.changeState(props.game[action])
        }

        function next (){
            console.log(props.game[saveState.next])
            props.changeState(props.game[saveState.next])
            let newSave = props.rooms.game[props.rooms.save].next
            console.log(newSave)
            props.setRooms({
                ...props.rooms, save:newSave
            })

            console.log(props.state)
        }
    
    return(
        <div className='col-8 display '>
        {/* this should be made into a componet and then fed in the values with props */}
    <div className='holder col-12'> <div className='textHolder speech-bubble '><p>Internal Monolog : {props.text}</p><div className='col-4 ' > 
     
       
       
    <div className='Next' >
        {/* if damage is true then take the damage */}

        {saveState.damage ? <>
        <button onClick={()=> damage(saveState.damage)} > TAKE DAMAGE</button></> :<>
         {/* if there is a choice value the do this */}
        {saveState.choice ?  <> {saveState.choice.map(choice=>{
        return(<button onClick={()=>button(choice)}   >{choice}</button>)
    })}</> : <> {saveState.movement ? <>
        {/* if all tou can do is move the state will only have the values of movement */}
        {saveState.movement.map(button=>{
            return( <button onClick={()=> props.changeState(props.game[button]) }> {button}</button>)
        })}</> : <><button onClick={next}>Next</button> </> }        
         </>}</>}

       
       
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
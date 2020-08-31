import React from 'react'
import ImageHolder from '../ImageHolder/ImageHolder'

function TextArea(props){
        console.log(props.state)

        function next (){
            console.log(props.game[props.state.next])
            props.changeState(props.game[props.state.next])
        }
    
    return(
        <div className='col-8 display '>
        {/* this should be made into a componet and then fed in the values with props */}
    <div className='holder col-12'> <div className='textHolder speech-bubble '><p>Internal Monolog : {props.text}</p><div className='col-4 ' > 
     
       
       
    <div className='Next' > <button onClick={next}>Next</button> </div>
       </div>   
       
       </div>
      </div>
       <div className='holder col-12'> 
        <ImageHolder src={props.state.src} ></ImageHolder>
         </div>
    </div>
    )
}
export default TextArea 
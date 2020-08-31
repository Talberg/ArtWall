import React from 'react'

function ImageHolder (props){
    return( <div className='PictureArea col-12' ><div className='col-4 offset-1'> <img height='600px' src={props.src} ></img></div></div>
      
)
}

export default ImageHolder
import React from 'react'

const LeftArrow = props => (
         <div onClick={props.onClick} className='pets-slider__arrow-block prev-arrow'>
              <img src={require('../../../../image/left-arrow.png')} alt="left-arrow"/>
         </div> 
)

export default LeftArrow
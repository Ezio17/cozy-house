import React from 'react'

const RightArrow = props => (
         <div onClick={props.onClick} className='pets-slider__arrow-block next-arrow'>
              <img src={require('../../../../image/right-arrow.png')} alt="right-arrow"/>
         </div> 
)

export default RightArrow
import React from 'react'

const RightBlock = () => (
  <article className='contact contact-right-block'>
   <div>
      <h3 className='contact__title'>We are waiting for your visit</h3>
   </div>
   <div className='contact__block Boston'>
     <img className='pin-image' src={require('../../../image/pin.png')} alt="pin"/>
     <p className='contact__text'>Boston, Central Street, 1st (Entrance from the store)</p>
   </div>
   <div className='contact__block London'>
      <img className='pin-image' src={require('../../../image/pin.png')} alt="pin"/>
      <p className='contact__text'>London, South Park, 18st</p>
  </div>
  </article>
)

export default RightBlock
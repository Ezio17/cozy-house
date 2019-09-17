import React from 'react'

const LeftBLock = () => (
  <article className='contact'>
    <div>
      <h3 className='contact__title'>For questions and suggestions</h3>
    </div>
    <div className='contact__block email'>
      <img className='email-image' src={require('../../../image/envelope.png')} alt="email"/>
      <p className='contact__text'>email@shelter.com</p>
    </div>
    <div className='contact__block phone'>
      <img className='phone-image' src={require('../../../image/telephone.png')} alt="telephone"/>
      <p className='contact__text'>+13 674 567 75 54</p>
    </div>
  </article>
)

export default LeftBLock
import React from 'react'

const Logo = props => (
  <div className='logo'>
     <p className={props.setClassTitle || 'logo__title'}>Cozy House</p>
     <p className={props.setClassBoston || 'logo__city' }>Shelter for pets in Boston</p>
  </div>
)

export default Logo
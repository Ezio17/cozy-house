import React from 'react'

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const FirstBlock = (props) => (
  <div className='header-first-block'>
   <Logo />
   <Navigation navigation={props.navigation}/>
  </div>
)

export default FirstBlock
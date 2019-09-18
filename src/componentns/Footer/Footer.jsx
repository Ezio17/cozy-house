import React from 'react'
import {Element} from 'react-scroll'

import LeftBlock from './Block/LeftBlock'
import RigthBlock from './Block/RightBlock'

const Footer = () => {
    return (
      <Element name='contacts' className='footer'>
        <div className='footer__wrapper'>        
          <LeftBlock /> 
          <RigthBlock />
        </div>
      </Element>
    )
  }

export default Footer
import React from 'react'

import FirstBlock from './FirstBlock/FirstBlock'
import OfferBlock from './OfferBlock/Offer'
import { navigation } from '../../data/data'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='wrapper'>
          <FirstBlock navigation={navigation}/>
          <OfferBlock />
        </div>
      </header>
    )
  }
}

export default Header
import React from 'react'

import Logo from './Header/FirstBlock/Logo/Logo'
import Navigation from './Header/FirstBlock/Navigation/Navigation'
import OurPets from './Main/OurPets/OurPets'
import Footer from './Footer/Footer'
import {navigation} from '../data/data'

const OurPetsPage = () => (
  <>
    <header className='header-first-block pets-header'>
      <Logo setClassTitle='pets-logo' setClassBoston='pets-logo-Boston'/>
      <Navigation navigation={navigation} setClass='pets-nav'/>
    </header>
    <OurPets />
    <Footer />
  </>
  )

export default OurPetsPage
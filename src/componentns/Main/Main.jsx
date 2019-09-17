import React from 'react'

import About from './About/About'
import Pets from './Pets/Pets'
import Help from './Help/Help'
import Donation from './Donation/Donation'

class Main extends React.Component {
  render() {
    return (
      <main>
        <About />
        <Pets />
        <Help />
        <Donation />
      </main>
    )
  }
}

export default Main
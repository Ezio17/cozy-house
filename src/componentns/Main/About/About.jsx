import React from 'react'

class About extends React.Component {
  render() {
    return (
       <div className='about-block'>
        <div className='about-wrapper'>
         <div className='about-image-warpper'>
          <img className='about-image' src={require('../../../image/Pets.png')} alt="Pets"/>
        </div>
        <section className='about'>
          <h3 className='about__title'>About the shelter “Cozy House”</h3>
          <p className='about__text-first'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. 
            Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.</p>
          <p className='about__text-second'>
            Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis 
            ultrices pharetra. Morbi tempus at ante sit amet tristique. 
            Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, dignissim 
            lorem. Sed at ligula et sem mattis gravida ac vel erat. 
          </p>
        </section>
      </div>
    </div>
    )
  }
  
}

export default About
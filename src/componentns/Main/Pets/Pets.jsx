import React from 'react'
import { Link } from 'react-router-dom'

import {slider as petsSlider} from '../../../data/data'
import SliderPets from './Slider/SliderPets'

class Pets extends React.Component {
  render() {
    return (
      <div className='pets-warpper'>
        <section className='pets-section'>
          <div className='pets-title-wrapper'>
            <h3 className='pets-title-wrapper__title'>Our friends who are looking for a house</h3>
          </div>
            <SliderPets petsSlider={petsSlider}/>  
           <div className='pets-button-wrapper'>
             <Link to='/pets'>
               <button className='pets-button-wrapper__button'>Get to know the rest</button>
              </Link>      
           </div>
         </section>
       </div>
    )
  }  
}

export default Pets
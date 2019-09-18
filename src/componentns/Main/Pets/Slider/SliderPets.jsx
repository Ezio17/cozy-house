import React from 'react'
import Slider from 'react-slick'

import LeftArrow from './LeftArrow'
import RigthArrow from './RightArrow'
import ModalPets from '../../../Common/ModalPets'

const SliderPets = props => {
  let settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
     {
      breakpoint: 910,
      settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
      }
     }
    ]
  };

  return(
  <Slider className='pets-slider' {...settings} prevArrow={<RigthArrow />} nextArrow={<LeftArrow />}>
    {props.petsSlider.map(pet => (
    <div className='pets-block' key={pet.img}>
      <img className='pets-block__image' src={require(`../../../../image/${pet.img}`)} alt={pet.name}/>
      <p className='pets-block__name'>{pet.name}</p>
      <ModalPets pet={pet}>
        <button className='pets-block__button'>Learn More</button>
      </ModalPets>  
    </div>
   ))}
  </Slider>
)
}

export default SliderPets
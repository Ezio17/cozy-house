import React from 'react'

import ModalPets from './ModalPets'

const PetsBlock = props => (
  props.pets.map(pet => (
    <div className='pets-block' key={pet.img}>
      <img className='pets-block__image' src={require(`../../image/${pet.img}`)} alt={pet.name}/>
      <p className='pets-block__name'>{pet.name}</p>
    <ModalPets pet={pet}>
      <button className='pets-block__button'>Learn More</button>
    </ModalPets>
   </div>
    ))
   
)

export default PetsBlock
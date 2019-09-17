import React from 'react'
import {Element} from 'react-scroll'

import {pets} from '../../../data/data'
import PetsBlock from '../../Common/PetsBlock'
import Pagination from './Pagination/Pagination'
import {paginationNumbers} from '../../../data/data'

const OurPets = () => {
  return (
  <main className='pets-main'>
    <Element name='shelter' className='our-pets'>
      <h3 className='our-pets__title'>Our frineds who are looking for a house</h3>
      <div className='our-pets__wrapper'>
        <PetsBlock pets={pets}/>
      </div>
      <Pagination paginationNumbers={paginationNumbers}/>
    </Element>
  </main>
)
}
export default OurPets
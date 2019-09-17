import React from 'react'
import {Link} from 'react-router-dom'

const Offer = () => (
  <div className='offer'>
     <h2 className='offer__title'>Not only people need a house</h2>
     <p className='offer__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida est in porttitor  porttitor. 
        Duis sodales elementum ipsum, vehicula condimentum erat fringilla et.
     </p>
     <Link to='/pets'>
      <button className='offer__button'>
        Make a friend
      </button>
    </Link>
   </div>
)

export default Offer
import React from 'react' 

const Pagination = props => (
  <div className='pagination'>
   {props.paginationNumbers.map(number => (
    number.isNumber ? 
  <div key={number.number} className={number.isActive ? 'pagination__block pagination__active' : 'pagination__block'}>
    <p className='pagination__number'>{number.number}</p>
  </div> :
  <p key={number.number} className='pagination__next-number'>{number.number}</p>
    ))}
  </div>
  )

export default Pagination
import React from 'react'

const Donation = () => (
      <div className='donation-wrapper'>
        <section className='donation'>
          <h3 className='donation__title'>In addition, you can make a donation</h3>
          <p className='donation__name-bank'>Name of the bank / Type of bank account</p>
          <div className='button-card'>
            <img src={require('../../../image/credit-card.png')} alt="credit-card" className='button-card__image'/>
            <p className='button-card__bank-number'>8380 2880 8028 8791 7435</p>
          </div>
          <p className='donation__text'>
            Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed 
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum 
            et malesuada fames ac ante ipsum primis in faucibus. 
          </p>
        </section>
      </div>
    )
  

export default Donation
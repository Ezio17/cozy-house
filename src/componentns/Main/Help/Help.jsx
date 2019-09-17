import React from 'react'
import {Element} from 'react-scroll'

import { help } from '../../../data/data'

class Help extends React.Component {
  render() {
    return (
      <Element name='shelter' className='help-block'>
        <section className='help-section'>
          <div className='help-title-block'>
            <h3 className='help-title-block__title'>Than you can help our shelter</h3>
          </div>
          <div className='subjects-block'>
            {help.map(helpItem => (
             <div className='subjects' key={helpItem.name}>
               <img src={require(`../../../image/${helpItem.img}`)} alt={helpItem.name}/>
               <h4 className='subjects__title'>{helpItem.name}</h4>
             </div>
            ))}
          </div>
        </section>
      </Element>
    )
  }
  
}

export default Help
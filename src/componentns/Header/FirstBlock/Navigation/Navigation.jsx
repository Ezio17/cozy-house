import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

const Navigation = props => (
  <nav className={props.setClass || 'navigation'}>
     <ul>
        {props.navigation.map(nav => (
          nav.navLink ? <NavLink exact key={nav.name} to={nav.to} className='navigation__li'>{nav.name}</NavLink> : 
          <LinkScroll smooth={true} spy={true} to={nav.to} className='navigation__li' key={nav.name}>{nav.name}</LinkScroll>
        ))}
     </ul>
  </nav>
)

export default Navigation
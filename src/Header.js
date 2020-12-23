import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {
  Navbar, 
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from 'reactstrap'



const Header = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return(
    <Navbar color='light' light spand='md'>
      <NavbarBrand tag={Link} to='/'>Minhas séries</NavbarBrand> 
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={open} navbar>
        <Nav className='ml-auto' navbar> 
          <NavItem> 
            <NavLink tag={Link} to='/generos'>Gêneros</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header

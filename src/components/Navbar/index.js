import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Logo from '../../img/logo-1.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
         <Nav>
           <NavbarContainer>
          <NavLogo to='/' > 
            <img src={Logo} alt='Northern Coalition For Peter Obi' />
            Northern Coalition For Peter Obi
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            
              <NavItem>
            <NavLinks to='/'onClick={closeMobileMenu}>Home</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/about'onClick={closeMobileMenu}>About</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/candidates'onClick={closeMobileMenu}> Candidates</NavLinks>
            </NavItem>
            
            <NavItem>
            <NavLinks to='/donate'onClick={closeMobileMenu}>Donate</NavLinks>
            </NavItem>
    
            <NavItem>
            <NavLinks to='/participate'onClick={closeMobileMenu}>Participate</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/contact'onClick={closeMobileMenu}>Contact</NavLinks>
            </NavItem>
              
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
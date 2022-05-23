import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import '../../App.css';
import '../Navbar.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { IoGlobeOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t, i18n } = useTranslation();

  function handleClick(taal) {
    i18n.changeLanguage(taal);
  }
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  
  function constructOptionToShow() {
    if (!isLoggedIn) {
      return (<NavDropdown
        title={`${t('NavBar.account')}`}
        id='collasible-nav-dropdown-acc'>
        <NavDropdown.Item href='/inloggen'>
          {t('NavBar.inloggen')}
        </NavDropdown.Item>
        <NavDropdown.Item href='/registreer'>
          {t('NavBar.registreren')}
        </NavDropdown.Item>
      </NavDropdown>)

    } else {
      return (<NavDropdown
        title={t('NavBar.inloggen')}
        id='collasible-nav-dropdown-acc'>
        <NavDropdown.Item href='/inloggen'>
          {t('NavBar.account')}
        </NavDropdown.Item>
        <NavDropdown.Item href='/registreer'>
          {t('NavBar.logout')}
        </NavDropdown.Item>
      </NavDropdown>)
    }
  }

  return (
    <Navbar collapseOnSelect expand='lg'>
      <Container> {/*hier stond een container! */}
        <Navbar.Brand href='/'>{t('NavBar.brand')}</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-end'>
          <Nav>
            <Nav.Link href='/'>{t('NavBar.home')}</Nav.Link>
            <Nav.Link href='/homes'>{t('NavBar.accomodaties')}</Nav.Link>
            <Nav.Link href='/hostworden'>{t('NavBar.host')}</Nav.Link>
            <Nav.Link href='/diensten'>{t('NavBar.diensten')}</Nav.Link>
            <Nav.Link href='/contact'>{t('NavBar.contact')}</Nav.Link>
            <NavDropdown
              title={`${t('NavBar.account')}`}
              id='collasible-nav-dropdown-acc'>
              <NavDropdown.Item href='/inloggen' className='account-btn'>
                {t('NavBar.inloggen')}
              </NavDropdown.Item>
              <NavDropdown.Item href='/registreer' className='account-btn'>
                {t('NavBar.registreren')}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<IoGlobeOutline />}
              id='collasible-nav-dropdown'>
              <NavDropdown.Item onClick={() => handleClick('en')}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleClick('es')}>
                Español
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleClick('fr')}>
                Français
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleClick('nl')}>
                Nederlands
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container> {/*hier stond een container! */}
    </Navbar>
  );
}

export default NavBar;

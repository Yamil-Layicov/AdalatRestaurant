import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss'
import { useEffect, useState } from 'react';



function Header() {

  const [navbar, setNavbar] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >=80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary navbar ${navbar && "navbarActive"}`}>
        <div className='logo'>
          <img src="https://us.123rf.com/450wm/benidict83/benidict832008/benidict83200800014/153588168-plate-with-fork-and-spoon-restaurant-logo.jpg?ver=6" alt="" />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='menuIcon'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='menuText'>
          <Nav className="me-auto">
          </Nav>
          <Nav className={`navLink ${navbar && "navActive"}`}>
            <div>Əsas</div>
            <div>Menyu</div>
            <div>Gallery</div>
            <div>About</div>
            <div className='reservation'>Rezervasiya</div>
          </Nav>
        </Navbar.Collapse>  
    </Navbar>
  );
}

export default Header;
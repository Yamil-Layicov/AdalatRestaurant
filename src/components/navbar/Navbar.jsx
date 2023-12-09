import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss'
import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'
import logo from './logo.jpeg'



function Header() {

  const [navbar, setNavbar] = useState(false);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);


  const changeBackground = () => {
    if (window.scrollY >=80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const moveToTop = () => {
    window.scrollTo({
      top:0,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);



  
  return (
    <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary navbar ${navbar && "navbarActive"}`}>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" className='menuIcon'/>
        <Navbar.Collapse id="responsive-navbar-nav show" className='menuText'>
          <Nav className="me-auto">
          </Nav>
          <Nav className={`navLink ${navbar && "navActive"}`}>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} onClick={() => moveToTop()} to='/' className='link'>Əsas</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} onClick={() => moveToTop()} to='/menu' className='link'>Menyu</NavLink>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} onClick={() => moveToTop()} to='/gallery' className='link'>Qalereya</NavLink>
            {/* <NavLink style={({isActive}) => ({color: isActive ? "chocolate" : ''})} onClick={() => moveToTop()} to='/about' className='link'>Haqqımızda</NavLink> */}
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} onClick={() => moveToTop()} to='/reservation' className='reservation link'>Rezervasiya</NavLink>
          </Nav>
        </Navbar.Collapse>  
    </Navbar>
  );
}

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.scss'



function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
        <div className='logo'>
          <img src="https://us.123rf.com/450wm/benidict83/benidict832008/benidict83200800014/153588168-plate-with-fork-and-spoon-restaurant-logo.jpg?ver=6" alt="" />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='menuIcon'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='menuText'>
          <Nav className="me-auto">
          </Nav>
          <Nav className='navLink'>
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
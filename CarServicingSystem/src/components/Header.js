import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthenticationService from '../AuthService/AuthenticationService';

function Header() {
  const location = useLocation();
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setuserName] = useState('')
  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn()
    setIsLoggedIn(isLoggedIn)
    let userName = sessionStorage.getItem('authenticatedFirstName')
    setuserName(userName)
    //console.log({userName},"sadsddskjbfdkjdsafkdsf")
  }, [location])
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#007580", text: 'white' }} variant="dark">
      <Container>
        
        { 
        (userName== 'Admin101' || userName== 'Admin101')  ? <Navbar.Brand href="#">Car Servicing System</Navbar.Brand> :
        isLoggedIn ?
         <Navbar.Brand href="/serviceRequestDashboard">Car Servicing System</Navbar.Brand>
          :  <Navbar.Brand href="/">Car Servicing System</Navbar.Brand>
        
        }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/registration">Register</Nav.Link> */}
            {!isLoggedIn && <Nav.Link href="#pricing">Offered Services</Nav.Link>}
            {!isLoggedIn && <Nav.Link href="/contact">About Us</Nav.Link>}
            
            {isLoggedIn && <NavDropdown title="History" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/serviceHistory">Your Service History</NavDropdown.Item>
              <NavDropdown.Item href="/enquiryHistory">Your Enquiries</NavDropdown.Item>
            </NavDropdown>
            }</Nav>
          <Nav>
            {!isLoggedIn && <Nav.Link href="login">Login/Register</Nav.Link>}
            {isLoggedIn && <Nav.Link onClick={() => { AuthenticationService.logout(); navigate('/login') }}>Logout</Nav.Link>}
            <Nav.Link >{userName}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header
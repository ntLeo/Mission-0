import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import styles from './Navbar.module.css';

const NavbarEl = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="white" data-bs-theme="light" className="" >
      <Container className={styles.navContainer}>
        <img src="../src/assets/dummy.jpg" alt="logo"></img>
        <Navbar.Brand href="#home" className={styles.brand}>My Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className={styles.collapseContainer}>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
       
        
        </Container>
        <Button variant="outline-secondary">Login</Button>{' '}
         </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarEl;

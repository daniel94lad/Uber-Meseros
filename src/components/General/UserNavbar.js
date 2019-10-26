import React from 'react';
import logo from '../../images/Logo-ubermeseros.png';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
 } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  _Exit(){
    localStorage.removeItem('key')
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="Space-logo-navbar">
            <img className="Logo-navbar" src={logo} alt="logoImage"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-3 mt-3 mt-md-0">
                <Link to="/user/userLandingPage">
                  <Button>
                    Mis Eventos
                  </Button>
                </Link>
              </NavItem>
              <NavItem className="ml-3 mt-3 mt-md-0">
                <Link to="/user/userLandingPage">
                  <Button>
                    Contrataciones
                  </Button>
                </Link>
              </NavItem>
              <NavItem className="ml-3 mt-3 mt-md-0">
                <Link to="/user/userLandingPage/ProfileUser">
                  <Button>
                    Mi-Perfil
                  </Button>
                </Link>
              </NavItem>
              <NavItem className="ml-3 mt-3 mt-md-0">
                <Link to="/user/userLandingPage/Attendance">
                  <Button>
                    Asistencia
                  </Button>
                </Link>
              </NavItem>
              <NavItem className="ml-3 mt-3 mt-md-0">
                <Link to="/">
                  <Button color="danger"onClick={this._Exit}>
                    Logout
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
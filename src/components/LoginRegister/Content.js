import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Back from '../../images/Back.svg';
import Plus from '../../images/Plus.svg';
import FB from '../../images/facebook.svg';
import IN from '../../images/instagram.svg';
import TW from '../../images/twitter.svg';
import GH from '../../images/github.svg'; 

import {Button,Container,Row,Col,Form,FormGroup,Label,Input} from 'reactstrap';

const Content =()=>{
    const nuestrocolor = '#d3d3d3';
    return (
        <div>
            <h1 className="titles">Registro</h1>
            <Container>
                {/* Boton Regreso */}
                <Row>
                    <Link to ='/login'>
                        <img src={Back} alt="Imagen regresar"/>
                    </Link>
                </Row>
                {/* Imagen Usuario */}
                <Row>
                    <Col sm='12' md={{size:8,offset:2}} align='center'>
                        <Button outline style={{borderColor:'transparent',boxShadow:'none',backgroundColor:'transparent'}}>
                            <img className="Register_image"
                            src={Plus}
                            alt="Userimage"
                            style={{border:`10px solid ${nuestrocolor}`}}
                            />
                        </Button>
                        
                    </Col>
                </Row>
                {/* Formulario + Boton */}
                <Row>
                    <Col sm='12' md={{size:8,offset:2}} className="Login_Col_Layout">
                        <Form>
                            <FormGroup>
                                <Input 
                                className="input-form"
                                type="username" 
                                name="username" 
                                id="Username" 
                                placeholder="Username" 
                                style={{ fontSize:'35px',borderRadius:'25px'}}
                                />
                                <Input 
                                className="input-form"
                                type="email" 
                                name="email" 
                                id="Email" 
                                placeholder="Email" 
                                style={{ fontSize:'35px',borderRadius:'25px'}}
                                />
                                <Input 
                                className="input-form" 
                                type="password" 
                                name="password" 
                                id="Password" 
                                placeholder="Password" 
                                style={{ fontSize:'35px',borderRadius:'25px'}}
                                />
                                <Input 
                                className="input-form" 
                                type="password" 
                                name="Confirm-password" 
                                id="Confirm-Password" 
                                placeholder="Confirm Password" 
                                style={{ fontSize:'35px',borderRadius:'25px'}}
                                />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                {/* Terminos y Condiciones */}
                <Row>
                    <Col sm='12' md={{size:8,offset:4}} className="Login_Col_Layout" align="center">
                        <Label check className="Check_Container">
                            <Input type="checkbox" style={{transform:'scale(2)',marginLeft:'30px'}}/>
                            <div className="Check_Terminos">He leido y acepto <br/> <Link to="/">Terminos y Condiciones</Link></div>
                        </Label>
                    </Col>
                    <Col sm='12' md={{size:6,offset:3}} align="center" style={{marginTop:'20px', marginBottom:'30px'}}>
                        <Link to ='/'>
                            <Button outline color="success" size="lg">Crear nueva cuenta</Button>
                        </Link>
                    </Col>
                </Row>
                {/* Redes sociales */}
                <Row>
                    <Col sm='12' md={{size:8,offset:2}} className="Login_Col_Layout">
                        <Button 
                        href="https://www.facebook.com" 
                        target="_blank"
                        className="rounded-pill" 
                        size="lg" 
                        block
                        style={{backgroundColor: '#3B5998',borderColor: '#3B5998'}}
                        >
                            <img src={FB} width="30px" alt="Facebook" align='left'/>
                            Registrate con Facebook
                        </Button>
                    </Col>
                    <Col sm='12' md={{size:8,offset:2}} className="Login_Col_Layout" >
                        <Button 
                        href="https://www.instagram.com" 
                        target="_blank"
                        className="rounded-pill"  
                        size="lg" 
                        block
                        style={{backgroundColor: '#F58529',borderColor: '#F58529'}}
                        >
                            <img src={IN} width="30px" alt="Instagram" align='left'/>
                            Registrate con Instagram
                        </Button>
                    </Col>
                    <Col sm='12' md={{size:8,offset:2}} className="Login_Col_Layout" >
                        <Button 
                        href="https://www.twitter.com" 
                        target="_blank"
                        className="rounded-pill" 
                        size="lg" 
                        block
                        style={{backgroundColor: '#00ACEE',borderColor: '#00ACEE'}}
                        >
                            <img src={TW} width="30px" alt="Twitter" align='left'/>
                            Registrate con Twitter
                        </Button>
                    </Col>
                    <Col sm='12' md={{size:8,offset:2}} className="Login_Col_Layout" >
                        <Button 
                        href="https://www.github.com" 
                        target="_blank"
                        className="rounded-pill" 
                        size="lg" 
                        block
                        style={{backgroundColor: '#292F33',borderColor: '#292F33'}}
                        >
                            <img src={GH} width="30px" alt="Github" align='left'/>
                            Registrate con Git-hub
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const mapStateToProps=(reducers)=>{
    return reducers.loginRegisterReducer
}
export default connect(mapStateToProps)(Content);
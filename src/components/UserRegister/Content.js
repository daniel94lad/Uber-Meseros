import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Back from '../../images/Back.svg';
import Plus from '../../images/Plus.svg';

import {Button,Container,Row,Col,Form,FormGroup,Label,Input,CustomInput} from 'reactstrap';

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
                        <img className="Register_image"
                        src={Plus}
                        alt="Userimage"
                        style={{border:`10px solid ${nuestrocolor}`}}
                        />
                    </Col>
                </Row>
                {/* Formulario + Boton */}
                <Row>
                    <Col sm='12' md={{size:8,offset:2}} className="Login_Col_Layout text-center">
                        <Form>
                            <FormGroup>
                                <Label>Imagen-Perfil</Label>
                                <CustomInput 
                                className="input-form"
                                type="file"
                                id="imageuser"
                                name="Upload-Image-User"  
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input 
                                className="input-form"
                                type="username" 
                                name="username" 
                                placeholder="User123"                                
                                style={{ fontSize:'20px',border:'2px solid gray'}}
                                />
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label>Nombre</Label>
                                    <Input 
                                    className="input-form"
                                    type="text" 
                                    name="Name" 
                                    placeholder="Pablo"
                                    style={{ fontSize:'20px',border:'2px solid gray'}}
                                     />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label>Apellido</Label>
                                    <Input 
                                    className="input-form"
                                    type="text" 
                                    name="Lastname" 
                                    placeholder="Ruiz"
                                    style={{ fontSize:'20px',border:'2px solid gray'}} 
                                    />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label>Correo</Label>
                                <Input 
                                className="input-form"
                                type="email" 
                                name="email" 
                                id="Email" 
                                placeholder="123@gmail.com" 
                                style={{ fontSize:'20px',border:'2px solid gray'}}
                                />
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input 
                                    className="input-form"
                                    type="password" 
                                    name="password" 
                                    style={{ fontSize:'20px',border:'2px solid gray'}}
                                     />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label>Confirmar Constraseña</Label>
                                    <Input 
                                    className="input-form"
                                    type="password" 
                                    name="confirm-password" 
                                    style={{ fontSize:'20px',border:'2px solid gray'}} 
                                    />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label for="exampleZip">Codigo postal</Label>
                                    <Input 
                                    type="number" 
                                    name="Code" 
                                    style={{ fontSize:'20px',border:'2px solid gray'}} 
                                    />
                                    </FormGroup>  
                                </Col>
                                <Col md={6} className="Checkbox-Registro d-flex justify-content-center">
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input type="checkbox"/>Soy Mesero
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
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
                        <Link to ='/user/userLandingPage'>
                            <Button outline color="success" size="lg">Crear nueva cuenta (Usuario)</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const mapStateToProps=(reducers)=>{
    return reducers.userRegisterReducer
}
export default connect(mapStateToProps)(Content);
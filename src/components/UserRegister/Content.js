import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Back from '../../images/Back.svg';
import Plus from '../../images/Plus.svg';

import {Button,Container,Row,Col,Form,FormGroup,Label,Input,CustomInput} from 'reactstrap';

class Content extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            first_name:'',
            last_name:'',
            email:'',
            phoneNumber:'',
            password:'',
            postalCode:'',
            streetAddress:'',
            active:false
        };
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
     
    handleSubmit = e => {
    e.preventDefault();
    
    const {username,first_name,last_name,email,phoneNumber,password,streetAddress,postalCode,active} = this.state;

    axios.post('http://localhost:8000/profiles/',{username,first_name,last_name,email,phoneNumber,password,streetAddress,postalCode,active})
        .then(result=>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error.result)
        })
    }
    componentDidMount(){
        axios.get('http://localhost:8000/profiles/')
        .then(res=>{
            console.log(res)
        })
        
    }
    render (){
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
                        <Form onSubmit={this.handleSubmit}>
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
                                onChange={this.handleChange}                            
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
                                    name="first_name" 
                                    placeholder="Pablo"
                                    onChange={this.handleChange} 
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
                                    name="last_name" 
                                    placeholder="Ruiz"
                                    onChange={this.handleChange} 
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
                                onChange={this.handleChange}
                                style={{ fontSize:'20px',border:'2px solid gray'}}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Telefono</Label>
                                <Input 
                                className="input-form"
                                type="number" 
                                name="phoneNumber" 
                                placeholder="33********"
                                onChange={this.handleChange}
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
                                    onChange={this.handleChange}  
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
                            <FormGroup>
                                <Label>Calle</Label>
                                <Input 
                                className="input-form"
                                type="text" 
                                name="streetAddress" 
                                placeholder="Lerma #1223" 
                                onChange={this.handleChange}
                                style={{ fontSize:'20px',border:'2px solid gray'}}
                                />
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                    <Label for="exampleZip">Codigo postal</Label>
                                    <Input 
                                    type="number" 
                                    name="postalCode" 
                                    onChange={this.handleChange} 
                                    style={{ fontSize:'20px',border:'2px solid gray'}} 
                                    />
                                    </FormGroup>  
                                </Col>
                                <Col md={6} className="Checkbox-Registro d-flex justify-content-center">
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input 
                                            type="checkbox" 
                                            name="active" 
                                            onChange={this.handleChange} />Soy Mesero
                                        </Label>
                                    </FormGroup>
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
                                    {/* <Link to ='/user/userLandingPage'> */}
                                    <Button type="submit" outline color="success" size="lg">Crear nueva cuenta (Usuario)</Button>
                                    {/* </Link> */}
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
}
const mapStateToProps=(reducers)=>{
    return reducers.userRegisterReducer
}
export default connect(mapStateToProps)(Content);
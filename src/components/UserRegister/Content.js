import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

import Back from '../../images/Back.svg';
import Plus from '../../images/Plus.svg';

import {Button,Container,Row,Col,Form,FormGroup,Label,Input,FormFeedback} from 'reactstrap';

class Content extends Component {
    componentDidMount(){
        axios.get('http://localhost:8000/profiles/')
        .then(res=>{
            console.log(res)
        })
        
    }
    constructor(props){
        
        super(props)
        this.state ={
            user:{ username:'',first_name:'' , last_name:'',email:'',password:''},
            phoneNumber:'',
            avatar:null,
            active:false,
            streetAddress:'',
            postalCode:'',
            redirect:false,
            validate:{emailState:'',
                    usernameState:'',
                    first_nameState:'', 
                    last_nameState:'',
                    passwordState:'',
                    phoneNumberState:'',
                    avatarState:'', 
                    streetAddressState:'', 
                    postalCodeState:''}
        }
    }
  
    changeUserHandler=(e)=>{
        const{user} ={...this.state};
        const currentState = user
        const {name,value} =e.target
        currentState[name]=value;
        this.setState({user:currentState})

        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
            if (emailRex.test(e.target.value)) {
                validate.emailState = 'has-success'
            } else {
                validate.emailState = 'has-danger'
            }
            if (this.state.user.username !== ''){
                validate.usernameState='has-success'
            } else{
                validate.usernameState='has-danger'
            }
            if (this.state.user.first_name !== ''){
                validate.first_nameState='has-success'
            } else{
                validate.first_nameState='has-danger'
            }
            if (this.state.user.last_name !== ''){
                validate.last_nameState='has-success'
            } else{
                validate.last_nameState='has-danger'
            }
            if (this.state.user.password !== ''){
                validate.passwordState='has-success'
            } else{
                validate.passwordState='has-danger'
            }
            this.setState({ validate })
        
    }
    changeBoolHandler=(e)=>{
        this.setState(prevState=>({
            active:!prevState.active
        }))
    }

    changeImageHandler=(e)=>{
        var self = this
        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onload = function(upload){
            self.setState({avatar:upload.target.result})
        }
        reader.readAsDataURL(file)

        const {validate} = this.state
            if (this.state.avatar != null){
                validate.avatarState='has-success'
            } else{
                validate.avatarState='has-danger'
            }
            this.setState({ validate })
        // console.log(this.state.avatar)
        // this.setState({avatar:e.target.files[0]})
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

        const {validate} = this.state
            if (this.state.phoneNumber.length-1 !== 0 && this.state.phoneNumber !== '' ){
                validate.phoneNumberState='has-success'
            } else{
                validate.phoneNumberState='has-danger'
            }
            this.setState({ validate })
            
            if (this.state.streetAddress.length > 0){
                validate.streetAddressState='has-success'
            } else{
                validate.streetAddressState='has-danger'
            }
            this.setState({ validate })
            if (this.state.postalCode.length-1 !== 0 && this.state.postalCode.length < 5 && this.state.postalCode !== ''){
                validate.postalCodeState='has-success'
            } else{
                validate.postalCodeState='has-danger'
            }
            this.setState({ validate })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        const input  = this.state
        fetch('http://localhost:8000/profiles/',{
            method:'POST',
            body: JSON.stringify(input),
            headers:{
                'Content-type':'application/json'
            }
            }).then(res=>res.json())
            .then(response => {
                console.log('Success',JSON.stringify(response))
                this.setState({redirect:true})
            })
            .catch(error=> console.log('Error',error));
        }
    render (){
    const nuestrocolor = '#d3d3d3';
    const redirectToRefer = this.state.redirect
    if(redirectToRefer ===true){
        return<Redirect to='/login'/>
    }
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
                        <Form onSubmit={this.submitHandler}>
                            <FormGroup>
                                <Label>Imagen-Perfil</Label>
                                <Input 
                                className="input-form"
                                type="file"
                                accept="image/png, image/jpeg"
                                id="avatar"
                                valid={ this.state.validate.avatarState === 'has-success' }
                                invalid={ this.state.validate.avatarState === 'has-danger' }
                                onChange={this.changeImageHandler}
                                name="avatar"  
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input 
                                className="input-form"
                                type="text" 
                                name="username"
                                valid={ this.state.validate.usernameState === 'has-success' }
                                invalid={ this.state.validate.usernameState === 'has-danger' }
                                value={this.state.username}
                                onChange={this.changeUserHandler} 
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
                                    name="first_name" 
                                    valid={ this.state.validate.first_nameState === 'has-success' }
                                    invalid={ this.state.validate.first_nameState === 'has-danger' }
                                    placeholder="Pablo"
                                    value={this.state.first_name}
                                    onChange={this.changeUserHandler} 
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
                                    valid={ this.state.validate.last_nameState === 'has-success' }
                                    invalid={ this.state.validate.last_nameState === 'has-danger' }
                                    placeholder="Ruiz"
                                    value={this.state.last_name}
                                    onChange={this.changeUserHandler} 
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
                                valid={ this.state.validate.emailState === 'has-success' }
                                invalid={ this.state.validate.emailState === 'has-danger' }
                                placeholder="123@gmail.com" 
                                value={this.state.email}
                                onChange={this.changeUserHandler}
                                style={{ fontSize:'20px',border:'2px solid gray'}}
                                />
                                <FormFeedback valid>
                                    Su correo es correcto!!!.
                                </FormFeedback>
                                <FormFeedback>
                                    Hay un problema con el correo, ingresa un correo valido
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Telefono</Label>
                                <Input 
                                className="input-form"
                                type="number" 
                                name="phoneNumber" 
                                valid={ this.state.validate.phoneNumberState === 'has-success' }
                                invalid={ this.state.validate.phoneNumberState === 'has-danger' }
                                placeholder="33********"
                                value={this.state.phoneNumber}
                                onChange={this.changeHandler}
                                style={{ fontSize:'20px',border:'2px solid gray'}}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Contraseña</Label>
                                <Input 
                                className="input-form"
                                type="password" 
                                name="password"
                                valid={ this.state.validate.passwordState === 'has-success' }
                                invalid={ this.state.validate.passwordState === 'has-danger' }
                                value={this.state.password}
                                onChange={this.changeUserHandler}  
                                style={{ fontSize:'20px',border:'2px solid gray'}}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label>Calle</Label>
                                <Input 
                                className="input-form"
                                type="text" 
                                name="streetAddress"
                                valid={ this.state.validate.streetAddressState === 'has-success' }
                                invalid={ this.state.validate.streetAddressState === 'has-danger' } 
                                placeholder="Lerma #1223" 
                                value={this.state.streetAddress}
                                onChange={this.changeHandler}
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
                                    valid={ this.state.validate.postalCodeState === 'has-success' }
                                    invalid={ this.state.validate.postalCodeState === 'has-danger' }
                                    value={this.state.postalCode}
                                    onChange={this.changeHandler} 
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
                                            value={this.state.active}
                                            onChange={this.changeBoolHandler} />Soy Mesero
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            {/* Terminos y Condiciones */}
                            <Row>
                                <Col sm='12' md={{size:8,offset:4}} className="Login_Col_Layout" align="center">
                                    <Label check className="Check_Container">
                                        <Input type="checkbox"  style={{transform:'scale(2)',marginLeft:'30px'}}/>
                                        <div className="Check_Terminos">He leido y acepto <br/> <Link to="/">Terminos y Condiciones</Link></div>
                                    </Label>
                                </Col>
                                <Col sm='12' md={{size:6,offset:3}} align="center" style={{marginTop:'20px', marginBottom:'30px'}}>
                                    <Button type="submit" outline color="success" size="lg">Crear nueva cuenta (Usuario)</Button>
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
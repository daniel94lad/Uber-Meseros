import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Back from '../../images/Back.svg'
import plus from '../../images/Logo-ubermeseros.png'
import {Button,Container,Row,Col,Form,FormGroup,Input} from 'reactstrap';
import * as loginActions from '../../actions/loginActions';
import axios from 'axios';


class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }
    _onSubmit = async (e)=>{
        
        e.preventDefault()
        try{
            
            let request = await axios.get(`http://localhost:8000/login/?username=${this.state.username}&password=${this.state.password}`,{
                
            })
            
        console.log(request)
        const {data} = request
        localStorage.setItem('username',this.state.username)
        localStorage.setItem('key',data.key)
        window.location.replace('http://localhost:3000/user/userLandingPage')
        

        }catch(error){
            console.log(error)
            console.log(this.state)
            alert("Tu usuario o contrasena son incorrectos, por favor revisalos")
        }
    }
    handleInputChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
          })
          
          
    }
    render(){
    return (
       
        <div>
            <h1 className="titles">Login</h1>
            <Container>
                {/* Boton Regreso */}
                <Row>
                    <Link to ='/'>
                        <img src={Back} alt="Imagen regresar"/>
                    </Link>
                </Row>
                {/* Imagen Usuario */}
                <Row>
                    <Col sm='12' md={{size:8,offset:2}} align='center'>
                        <img className="User_image"
                        src={plus}
                        alt="Userimage"
                        />
                    </Col>
                </Row>
                {/* Formulario + Boton */}
                <Row>
                    <Col sm='12' md={{size:8,offset:2}} className="Login_Col_Layout">
                        <Form onSubmit={this._onSubmit}>
                            <FormGroup>
                                <Input 
                                className="input-form"
                                type="username" 
                                name="username" 
                                id="Username" 
                                placeholder="Username" 
                                style={{ fontSize:'35px',borderRadius:'25px'}}
                                onChange={this.handleInputChange}
                                />
                                <Input 
                                className="input-form" 
                                type="password" 
                                name="password" 
                                id="Password" 
                                placeholder="Password" 
                                style={{ fontSize:'35px',borderRadius:'25px'}}
                                onChange={this.handleInputChange}
                                />
                            </FormGroup>
                            <Row>
                                <Col sm='12' md={{size:6,offset:3}} align="center" style={{marginTop:'20px'}}>
                                    <Button type='submit' outline color="primary" size="lg" style={{width:'50%'}}>Login</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                {/* Boton Register */}
                
            </Container>
        </div>
    )
}
}
const mapStateToProps=(reducers)=>{
    return reducers.loginReducer
}
export default connect(mapStateToProps,loginActions)(Content)
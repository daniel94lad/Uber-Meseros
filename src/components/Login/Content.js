import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Back from '../../images/Back.svg'
import FB from '../../images/facebook.svg';
import IN from '../../images/instagram.svg';
import TW from '../../images/twitter.svg';
import GH from '../../images/github.svg'; 

import {Button,Container,Row,Col,Form,FormGroup,Input} from 'reactstrap';
import * as loginActions from '../../actions/loginActions';


const Content =(props)=>{
    let [user,setUser] = useState(null)
    const nuestrocolor = '#fa0f00';
    console.log(props)
    function _onChangeUser(event){
        // setUser(event.target.value)
        let userObj = props.users.find(item=>{
            if(item.name === event.target.value){
                return true
            }else{
                return false
            }
        })
        console.log(userObj)
        setUser(userObj)
    }
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
                        src={user ? user.image : "https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
                        alt="Userimage"
                        style={{border:`10px solid ${nuestrocolor}`}}
                        />
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
                                onChange={_onChangeUser}
                                />
                                <Input 
                                className="input-form" 
                                type="password" 
                                name="password" 
                                id="Password" 
                                placeholder="Password" 
                                style={{ fontSize:'35px',borderRadius:'25px'}}
                                />
                            </FormGroup>
                        </Form>
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
                            Ingresa con Facebook
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
                            Ingresa con Instagram
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
                            Ingresa con Twitter
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
                            Ingresa con Git-hub
                        </Button>
                    </Col>
                </Row>
                {/* Boton Register */}
                <Row>
                    <Col sm='12' md={{size:6,offset:3}} align="center" style={{marginTop:'20px'}}>
                        <Link to ='/login/register'>
                            <Button outline color="primary" size="lg">Registrate</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const mapStateToProps=(reducers)=>{
    return reducers.loginReducer
}
export default connect(mapStateToProps,loginActions)(Content)
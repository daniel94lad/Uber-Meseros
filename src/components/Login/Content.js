import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Back from '../../images/Back.svg'

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
                {/* Boton Register */}
                <Row>
                    <Col sm='12' md={{size:6,offset:3}} align="center" style={{marginTop:'20px'}}>
                        <Link to ='/login/register'>
                            <Button outline color="primary" size="lg" style={{width:'30%'}}>Login</Button>
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
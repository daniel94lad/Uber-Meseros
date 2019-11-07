import React,{Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../General/UserNavbar';
import userImage from '../../images/user.png';
import StarRatingComponent from 'react-star-rating-component';

import 
    {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardText,
    CardImg,
    CardBody,
    CardTitle
    }
    from 'reactstrap';
import axios from 'axios';

class Content extends Component{
    getUsers(){
        axios.get(`http://localhost:8000/profiles/${localStorage.getItem('username')}`)
        .then(response=>
            response.data.map(data=>({
                avatar:`http://localhost:8000${data.avatar}`,
                street:`${data.streetAddress}`,
                CP:`${data.postalCode}`,
                phone_Number:`${data.phoneNumber}`,
                username:`${data.user.username}`,
                nombre:`${data.user.first_name}`,
                apellido:`${data.user.last_name}`,
                email:`${data.user.email}`, 

            }))
        )
        .then(users=>{
            this.setState({
                users
            })
        })
    }
    componentDidMount(){
        
        this.getUsers();
    }
    constructor(props){
        super(props)
        this.state={
            users:[],
        }
    }
    render(){
        console.log(this.state)
        const{users} = this.state
    return(
        <div>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-end d-flex mt-4">
                        <Button color="danger" className="justify-content-end d-flex" >Editar</Button>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {users.map(user=>{
                        const{street,active,CP,nombre,apellido,username,avatar,phone_Number,email}=user;
                        return(
                            <Col key={username} md="6" className="text-center" width="100%">
                                <Row>
                                    <Col md="12" className="justify-content-center d-flex mt-4">
                                        <img className="User-Persona" style={{borderRadius:"50%"}} width="15%" src={avatar} alt="Imagen_Perfil_Usuario"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="justify-content-center d-flex mt-4">
                                        <div style={{fontSize: 50}}>
                                            <StarRatingComponent 
                                            name="rate1" 
                                            starCount={5}
                                            value={4}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6" className="Perfil-Usuario-Nombre justify-content-end d-flex mt-2">
                                        <h1>{nombre}</h1>
                                    </Col>
                                    <Col md="6" className="Perfil-Usuario-Apellido justify-content-start d-flex mt-2">
                                        <h1>{apellido}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="Perfil-Usuario-Center justify-content-center d-flex text-center mt-4">
                                        <h1>{email}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="Perfil-Usuario-Center text-center">
                                        <h1>{username}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="Perfil-Usuario-Center text-center">
                                        <h1>{phone_Number}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                <Col md="8" className="Perfil-Usuario-Center text-center">
                                        <h1>{street}</h1>
                                    </Col>
                                    <Col md="4" className="Perfil-Usuario-Center text-center">
                                        <h1>{CP}</h1>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
                
                <Row  className="Perfil_Subtitle mt-4">
                    <Col md ="12" className="text-center">
                        <h3>Clientes Anteriores</h3>
                    </Col>
                </Row>
                <Row className="user-card">
                    <Col sm="12" md="4">
                        <Card className="align-items-center d-flex ">
                            <CardImg top width="10%" src={userImage}  alt="Card image cap" />
                            <CardBody className="text-center">
                            <CardTitle>
                                <div style={{fontSize: 26}}>
                                    <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={3}
                                    />
                                </div>
                            </CardTitle>
                            <CardText>Buen servicio llego a la hora acordada</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="4">
                        <Card className="align-items-center d-flex ">
                            <CardImg top width="10%" src={userImage}  alt="Card image cap" />
                            <CardBody className="text-center">
                            <CardTitle>
                                <div style={{fontSize: 26}}>
                                    <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={5}
                                    />
                                </div>
                            </CardTitle>
                            <CardText>Optimo en su servicio, me atendio super bien y llego a tiempo</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="4">
                        <Card className="align-items-center d-flex ">
                            <CardImg top width="10%" src={userImage}  alt="Card image cap" />
                            <CardBody className="text-center">
                            <CardTitle>
                                <div style={{fontSize: 26}}>
                                    <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={4}
                                    />
                                </div>
                            </CardTitle>
                            <CardText>Me lo recomendaron como Barman y nos sorprendio con muy buenas combinaciones de Tequila.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}
const mapStateToProps=(reducers)=>{
    return reducers.profileUserReducer
}
export default connect(mapStateToProps)(Content);
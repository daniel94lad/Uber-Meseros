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
class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Nombre:"Rodolfo",
            Apellido:"Toks",
            Email:"Rodo@gmail.com",
            Username:"rodo123xh",
            Phone:`+52 33-31-36-54`,
            Ciudad:"Guadalajara",
            CP:45080,
            SoyMesero:"Soy Mesero"

        };
    }
    render(){
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
                <Row>
                    <Col md="12" className="justify-content-center d-flex mt-4">
                        <img width="15%" src={userImage} alt="Imagen_Perfil_Usuario"/>
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
                        <h1>{this.state.Nombre}</h1>
                    </Col>
                    <Col md="6" className="Perfil-Usuario-Apellido justify-content-start d-flex mt-2">
                        <h1>{this.state.Apellido}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="Perfil-Usuario-Center justify-content-center d-flex text-center mt-4">
                        <h1>{this.state.Email}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="Perfil-Usuario-Center text-center">
                        <h1>{this.state.Username}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="Perfil-Usuario-Center text-center">
                        <h1>{this.state.Phone}</h1>
                    </Col>
                </Row>
                <Row>
                <Col md="8" className="Perfil-Usuario-Center text-center">
                        <h1>{this.state.Ciudad}</h1>
                    </Col>
                    <Col md="4" className="Perfil-Usuario-Center text-center">
                        <h1>{this.state.CP}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="12"  className="Perfil-Usuario-Center text-center mb-4">
                        <h1 style={{background:"green",color:"white"}}>{this.state.SoyMesero}</h1>
                    </Col>
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
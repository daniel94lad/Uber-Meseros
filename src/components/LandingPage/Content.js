import React,{Component} from 'react';
import logo from '../../images/Logo-ubermeseros.png';
import {Link} from 'react-router-dom';
import userImage from '../../images/user.png';
import StarRatingComponent from 'react-star-rating-component';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';

class Content extends Component{
    constructor(props) {
    super(props);
    this.state = {
        modal: false,
        rating:4
    };
}

    render(){
        return(
            <div>
                <Container>
                    {/* Logotipo */}
                    <Row className="justify-content-center">
                        <Col md="6" className="justify-content-center d-flex">
                        <img className="Image-Landing-Logo"src={logo} alt="Imagen-logo" />
                        </Col>
                        <Col md="12 text-center">
                            <h1 className="Title-Logo">PYParty</h1>
                            <h4 style={{fontStyle:"italic"}}>"Plan your Party"</h4>
                        </Col>
                    </Row>
                    {/* Usuarios Comentarios */}
                    <Row className="user-card" style={{marginTop:"0"}}>
                        <Col sm="12" md="4">
                            <Card className="align-items-center d-flex ">
                                <CardImg top width="10%" src={userImage}  alt="Card image cap" />
                                <CardBody className="text-center">
                                <CardTitle>Jorge Martinez</CardTitle>
                                <CardTitle>
                                    <div style={{fontSize: 30}}>
                                        <StarRatingComponent 
                                        name="rate1" 
                                        starCount={5}
                                        value={5}
                                        />
                                    </div>
                                </CardTitle>
                                <CardText>Super servicio, llegaron a la hora estimada y sin pagar tanto.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="4">
                            <Card className="align-items-center d-flex ">
                                <CardImg top width="10%" src={userImage}  alt="Card image cap" />
                                <CardBody className="text-center">
                                <CardTitle>Eduardo Roman</CardTitle>
                                <CardTitle>
                                    <div style={{fontSize: 30}}>
                                        <StarRatingComponent 
                                        name="rate1" 
                                        starCount={5}
                                        value={5}
                                        />
                                    </div>
                                </CardTitle>
                                <CardText>Siempre paga servicios carisimos. Esta app si es para fiestas a tu eleccion.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="4">
                            <Card className="align-items-center d-flex ">
                                <CardImg top width="10%" src={userImage}  alt="Card image cap" />
                                <CardBody className="text-center">
                                <CardTitle>Ramiro Cruz</CardTitle>
                                <CardTitle>
                                    <div style={{fontSize: 30}}>
                                        <StarRatingComponent 
                                        name="rate1" 
                                        starCount={5}
                                        value={5}
                                        />
                                    </div>
                                </CardTitle>
                                <CardText>La atencion de buena calidad y el barman tenia muy buenas recomendaciones</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {/* Boton-Logotipo */}
                    <Row>
                        <Col md="12" className="Button-login text-center">
                            <Link to="/login">
                                <Button outline color="success">Login</Button>
                            </Link>
                        </Col>
                    </Row>
                    {/* Registro Prompt */}
                    <Row>
                        <Col md="12" className="Link-registro text-center">
                            <Link  to="/user/register">
                                <Button color="danger">No tengo cuenta.(Registro)</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Content;

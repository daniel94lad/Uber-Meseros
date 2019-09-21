import React,{Component} from 'react';
import logo from '../../images/Logo-ubermeseros.png';
import {Link} from 'react-router-dom';
import userImage from '../../images/user.png';
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
    Modal, 
    ModalHeader, 
    ModalFooter
} from 'reactstrap';

class Content extends Component{
    constructor(props) {
    super(props);
    this.state = {
        modal: false,
    };

    this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
    }));
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
                            <h1 className="Title-Logo">UBERMESEROS</h1>
                        </Col>
                    </Row>
                    {/* Usuarios Comentarios */}
                    <Row className="user-card">
                        <Col sm="12" md="4">
                            <Card className="align-items-center d-flex ">
                                <CardImg top width="10%" src={userImage} className="lala" alt="Card image cap" />
                                <CardBody className="text-center">
                                <CardTitle>Jorge Martinez</CardTitle>
                                <CardText>Super servicio, llegaron a la hora estimada y sin pagar tanto.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="4">
                            <Card className="align-items-center d-flex ">
                                <CardImg top width="10%" src={userImage} className="lala" alt="Card image cap" />
                                <CardBody className="text-center">
                                <CardTitle>Eduardo Roman</CardTitle>
                                <CardText>Siempre paga servicios carisimos. Esta app si es para fiestas a tu eleccion.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="4">
                            <Card className="align-items-center d-flex ">
                                <CardImg top width="10%" src={userImage} className="lala" alt="Card image cap" />
                                <CardBody className="text-center">
                                <CardTitle>Ramiro Cruz</CardTitle>
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
                            <Button color="danger" onClick={this.toggle}>No tengo cuenta.(Registro)</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} centered={true} className={this.props.className}>
                                <ModalHeader toggle={this.toggle} className="text-center">Tipo de Cuenta</ModalHeader>
                                <ModalFooter className="justify-content-around">
                                    <Link to="/user/register">
                                        <Button color="primary" onClick={this.toggle}>Usuario</Button>
                                    </Link>
                                    <Link to ="/user/register">
                                        <Button color="primary" onClick={this.toggle}>Mesero</Button>
                                    </Link>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Content;

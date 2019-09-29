import React,{Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../General/UserNavbar';
import {Link} from 'react-router-dom';
import userImage from '../../images/user.png';
import StarRatingComponent from 'react-star-rating-component';
import {Container,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalFooter,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';



class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            rating:4
        };
    
        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render(){
        // const{rating} = this.state
    return(
        <div>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <Col md ="12" className="LandingUsuarios_Title text-center">
                <h1>Mis Eventos</h1>
            </Col>
            <Container>
                <Row className="Mis-Eventos-Container">
                    <Col md="12" className="text-center align-self-center">
                        <Button outline size="lg" className="LandingUsuarios-Button" color="success" onClick={this.toggle}>Crea tu Evento</Button>
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
                <Row  className="LandingUsuarios_Subtitle">
                    <Col md ="12" className="text-center">
                        <h3>Nuestros Meseros</h3>
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
                                <CardText>Experto en cocteleria , servicio por 5 años en Toks y 3 años en Vips</CardText>
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
    return reducers.userLandingPageReducer
}
export default connect(mapStateToProps)(Content);
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../General/UserNavbar';
import userImage from '../../images/user.png';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import {Container,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Form, 
    FormGroup, 
    Label, 
    Input, 
} from 'reactstrap';

import PersonalComp from '../PersonalReview';

class Content extends Component{
    componentDidMount(){
        axios.get('http://localhost:8000/profiles/')
        .then(res=>{
            console.log(res)
        })
        
    }
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
                        {/* Crea tu Evento - Prompt */}
                        <Modal isOpen={this.state.modal} toggle={this.toggle} centered={true} className={this.props.className}>
                            <ModalHeader toggle={this.toggle} className="text-center">Crea tu evento</ModalHeader>
                            <ModalBody>
                            <Form className="text-center w-100" >
                                    <FormGroup>
                                        <Label>Nombre Evento</Label>
                                        <Input className="text-center" bsSize="lg" type="text" placeholder="XV´s Sofia" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Fecha</Label>
                                        <Input bsSize="lg"  type="date" name="date" placeholder="date placeholder"/>
                                    </FormGroup>
                                    <Row form className="justify-content-center">
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>Hora de llegada</Label>
                                                <Input width="100%" type="time" placeholder="time placeholder"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="2">
                                            <Label>a</Label>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>Hora de salida</Label>
                                                <Input width="100%" type="time" placeholder="time placeholder"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label>Telefono</Label>
                                        <Input className="text-center" type="number" name="number" placeholder="33*******"/>
                                    </FormGroup>
                                    <Row form>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>Ciudad</Label>
                                                <Input type="text" name="city"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>Calle</Label>
                                                <Input type="text" name="address"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>Codigo Postal</Label>
                                                <Input type="text" name="zip"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </ModalBody>
                            <ModalFooter className="justify-content-around">
                                <PersonalComp/>
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
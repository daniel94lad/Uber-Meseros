import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../General/UserNavbar';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
const Content=()=>{
    return(
        <div>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <Container>
                <Row md="12" className="justify-content-center text-center mt-4" width="100%">
                    <Col md="8" style={{border:"2px solid gray", backgroundColor:"rgba(134, 196, 237, 0.3)"}}>
                        <Row className="justify-content-center mt-2"><h2>XV Años</h2></Row>
                        <Row className="justify-content-center mt-2"><h4>Av. Adolfo López Mateos Sur 5516, 45070 Zapopan</h4></Row>
                        <Row className="justify-content-center mt-2"><h4>25/06/2019</h4></Row>
                        <Row className="justify-content-center mt-2"><h4>09:00 PM a 02:00 AM</h4></Row>
                        <Row className="justify-content-center mt-2" style={{color:"rgb(73,170,123)"}}><h4>Total: 640.00 MXN</h4></Row>
                    </Col>
                    <Col md="auto" style={{border:"2px solid gray"}} >
                        <Row className="justify-content-center mb-3 mt-5">
                            <Button color="success" size="lg">Aceptar</Button>
                        </Row>
                        <Row className="justify-content-center mr-2 mt-5 ml-2" >
                            <Button color="danger" size="lg">Rechazar</Button>
                        </Row>
                    </Col>
                </Row>
                <Row md="12" className="justify-content-center text-center mt-4" width="100%">
                    <Col md="8" style={{border:"2px solid gray" ,backgroundColor:"rgba(134, 196, 237, 0.3)"}}>
                        <Row className="justify-content-center mt-2"><h2>Cumpleaños</h2></Row>
                        <Row className="justify-content-center mt-2"><h4>Av. Vallarta Sur 216, 45310 Zapopan</h4></Row>
                        <Row className="justify-content-center mt-2"><h4>21/08/2019</h4></Row>
                        <Row className="justify-content-center mt-2"><h4>01:00 PM a 08:00 PM</h4></Row>
                        <Row className="justify-content-center mt-2" style={{color:"rgb(73,170,123)"}}><h4>Total: 1,120.00 MXN</h4></Row>
                    </Col>
                    <Col md="auto" className="align-items-center" style={{border:"2px solid gray"}} >
                        <Row className="justify-content-center mb-3 mt-5">
                            <Button color="success" size="lg">Aceptar</Button>
                        </Row>
                        <Row className="justify-content-center mr-2 mt-5 ml-2" >
                            <Button color="danger" size="lg">Rechazar</Button>
                        </Row>
                    </Col>
                </Row>
                <Row md="12" className="justify-content-center text-center mt-4" width="100%">
                    <Col md="8" style={{border:"2px solid gray",backgroundColor:"rgba(134, 196, 237, 0.3)"}}>
                        <Row className="justify-content-center mt-2"><h2>Evento Ejecutivo</h2></Row>
                        <Row className="justify-content-center mt-2"><h4>Calle Isla Zanzibar 3719, Villa Guerrero, 44987 Guadalajara</h4></Row>
                        <Row className="justify-content-center mt-2"><h4>12/10/2019</h4></Row>
                        <Row className="justify-content-center mt-2"><h4>07:00 PM a 10:00 AM</h4></Row>
                        <Row className="justify-content-center mt-2" style={{color:"rgb(73,170,123)"}}><h4>Total: 1,120.00 MXN</h4></Row>
                    </Col>
                    <Col md="auto" className="align-items-center" style={{border:"2px solid gray"}} >
                        <Row className="justify-content-center mb-3 mt-5">
                            <Button color="success" size="lg">Aceptar</Button>
                        </Row>
                        <Row className="justify-content-center mr-2 mt-5 ml-2" >
                            <Button color="danger" size="lg">Rechazar</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const mapStateToProps=(reducers)=>{
    return reducers.createEventReducer
}
export default connect(mapStateToProps)(Content);
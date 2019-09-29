import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../General/UserNavbar';
import StarRatingComponent from 'react-star-rating-component';
import userImage from '../../images/user.png';

import {
    Container,
    Row,
    Col,
    Button
    }
    from 'reactstrap';

const Content=()=>{
    return(
        <div>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <Col md ="12" className="text-center Asistencia_Title">
                <h1>Asistencia</h1>
            </Col>
            <Container>
                <Row  className="justify-content-center mt-4">
                    <Col md="3" className="Asistencia-content-card" style={{border:"2px solid gray"}}>
                        <img width="45%" className="mt-1 mb-1" src={userImage} alt="Imagen-Perfil"/>
                    </Col>
                    <Col md="4" className="Asistencia-content-card" style={{border:"2px solid gray"}}>
                        <h1>lalala</h1>
                    </Col>
                    <Col md="auto" style={{border:"2px solid gray"}} >
                        <Row className="justify-content-center mb-2 mt-3">
                            <Button color="success">Aceptar</Button>
                        </Row>
                        <Row className="justify-content-center mr-2 ml-2 mb-2" >
                            <Button color="danger">Declinar</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
const mapStateToProps=(reducers)=>{
    return reducers.attendanceReducer
}
export default connect(mapStateToProps)(Content);
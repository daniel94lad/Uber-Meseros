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
    Button
    }
    from 'reactstrap';
class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Nombre:"Rodolfo",
            Apellido:"Toks"
        };
    }
    render(){
    return(
        <div>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <Container style={{width:"80%"}}>
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
            </Container>
        </div>
    )
}
}
const mapStateToProps=(reducers)=>{
    return reducers.profileUserReducer
}
export default connect(mapStateToProps)(Content);
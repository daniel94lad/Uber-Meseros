import React,{Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../General/UserNavbar';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import {
    Container,
    Row,
    Col,
    Button
    }
    from 'reactstrap';

class Content extends Component{
    getUsers(){
        axios.get('http://localhost:8000/profiles/meseros/')
        .then(response=>
            response.data.map(data=>({
                avatar:`http://localhost:8000${data.avatar}`,
                phone_Number:`${data.phoneNumber}`,
                username:`${data.user.username}`,
                name:` ${data.user.first_name} ${data.user.last_name}`,
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
            users:[]
        }
    }

    render(){
        console.log(this.state)
        const{users} = this.state
        let subset = users.slice(4,5)
        let subset2 = users.slice(3,4)
        let subset3 = users.slice(1,2)
    return(
        <div>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <Col md ="12" className="text-center Asistencia_Title">
                <h1>Asistencia</h1>
            </Col>
            <Container style={{maxWidth:"960px"}}>
                <Row  className="justify-content-center mt-4">
                {subset.map(user=>{
                            const{username}=user;
                            return(
                                <Row key={username} md="12" className="justify-content-center text-center" width="100%">
                                    <Col md="3" className="Asistencia-content-card" style={{border:"2px solid gray"}}>
                                        <img width="45%" className="mt-1 mb-1" style={{borderRadius:"50%"}} src={user.avatar} alt="Imagen-Perfil"/>
                                    </Col>
                                    <Col md="4" style={{border:"2px solid gray"}}>
                                        <Row className="justify-content-center">
                                            <div style={{fontSize: 30}}>
                                                <StarRatingComponent 
                                                name="rate1" 
                                                starCount={5}
                                                value={5}
                                                />
                                            </div>
                                        </Row>
                                        <Row className="text-center">
                                            <Col md="12">
                                                <h4>{user.name}</h4>
                                            </Col>
                                            <Col md="12">
                                                <h4 style={{color:'green'}}>Confirmado</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="auto" style={{border:"2px solid gray"}} >
                                        <Row className="justify-content-center mb-2 mt-3">
                                            <Button color="success" size="lg">Confirmar</Button>
                                        </Row>
                                        <Row className="justify-content-center mr-2 ml-2 mb-2" >
                                            <Button color="danger" size="lg">Reportar</Button>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        })}
                    
                </Row>
                <Row  className="justify-content-center mt-4">
                {subset2.map(user=>{
                            const{username}=user;
                            return(
                                <Row key={username} md="12" className="justify-content-center text-center" width="100%">
                                    <Col md="3" className="Asistencia-content-card" style={{border:"2px solid gray"}}>
                                        <img width="45%" className="mt-1 mb-1" style={{borderRadius:"50%"}} src={user.avatar} alt="Imagen-Perfil"/>
                                    </Col>
                                    <Col md="4" style={{border:"2px solid gray"}}>
                                        <Row className="justify-content-center">
                                            <div style={{fontSize: 30}}>
                                                <StarRatingComponent 
                                                name="rate1" 
                                                starCount={5}
                                                value={5}
                                                />
                                            </div>
                                        </Row>
                                        <Row className="text-center">
                                            <Col md="12">
                                                <h4>{user.name}</h4>
                                            </Col>
                                            <Col md="12">
                                                <h4 style={{color:'red'}}>Pendiente</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="auto" style={{border:"2px solid gray"}} >
                                        <Row className="justify-content-center mb-2 mt-3">
                                            <Button color="success" size="lg">Confirmar</Button>
                                        </Row>
                                        <Row className="justify-content-center mr-2 ml-2 mb-2" >
                                            <Button color="danger" size="lg">Reportar</Button>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        })}
                </Row>
                <Row  className="justify-content-center mt-4">
                {subset3.map(user=>{
                            const{username}=user;
                            return(
                                <Row key={username} md="12" className="justify-content-center text-center" width="100%">
                                    <Col md="3" className="Asistencia-content-card" style={{border:"2px solid gray"}}>
                                        <img width="45%" className="mt-1 mb-1" style={{borderRadius:"50%"}} src={user.avatar} alt="Imagen-Perfil"/>
                                    </Col>
                                    <Col md="4" style={{border:"2px solid gray"}}>
                                        <Row className="justify-content-center">
                                            <div style={{fontSize: 30}}>
                                                <StarRatingComponent 
                                                name="rate1" 
                                                starCount={5}
                                                value={5}
                                                />
                                            </div>
                                        </Row>
                                        <Row className="text-center">
                                            <Col md="12">
                                                <h4>{user.name}</h4>
                                            </Col>
                                            <Col md="12">
                                                <h4 style={{color:'red'}}>Pendiente</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="auto" style={{border:"2px solid gray"}} >
                                        <Row className="justify-content-center mb-2 mt-3">
                                            <Button color="success" size="lg">Confirmar</Button>
                                        </Row>
                                        <Row className="justify-content-center mr-2 ml-2 mb-2" >
                                            <Button color="danger" size="lg">Reportar</Button>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        })}
                </Row>
            </Container>
        </div>
    )
}
}
const mapStateToProps=(reducers)=>{
    return reducers.attendanceReducer
}
export default connect(mapStateToProps)(Content);
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as PersonalReviewActions from '../../actions/personalReviewActions';
import Content from './Content';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import axios from 'axios';
import {Container,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
class personalReview extends Component{

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
  
    ponerContenido = ()=>
    {
        if(this.props.cargando){
            return <Spinner/>
        }
        if(this.props.error)
        {
            return <Fatal mensaje ={this.props.error}/>
        }
        return <Content/>
    }
    render(){
        console.log(this.state)
        const{users} = this.state
        return (
            <div>
                <Container>
                    <Row>
                        {users.map(user=>{
                            const{name,username,avatar,phone_Number,email}=user;
                            return(
                                <Col key={username} md="6" className="text-center" width="100%">
                                    <Card className="align-items-center mb-3 mt-4">
                                        <CardImg className="User-Persona" style={{marginTop:'2%',borderRadius:"50%",width:"50%"}}  width="100%" src={avatar} alt="Profile-IMG"/>
                                        <CardBody>
                                            <CardTitle style={{fontSize:"25px",color:"rgb(166, 101, 255)"}}>{name}</CardTitle>
                                            <CardSubtitle>{email}</CardSubtitle>
                                            <CardText>{phone_Number}</CardText>
                                            <Button color="info">Contratar</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (reducers)=>{
    return reducers.personalReviewReducer;
}
export default  connect(mapStateToProps,PersonalReviewActions)(personalReview);
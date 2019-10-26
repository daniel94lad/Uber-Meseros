import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as PersonalReviewActions from '../../actions/personalReviewActions';
import Content from './Content';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import axios from 'axios';


class personalReview extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
        }
    }
    _onSubmit = async (e)=>{
        
        e.preventDefault()
        const {username,password} = this.state
        try{
            
            let request = await axios.post('http://localhost:8000/api/login/',{
                username,
                password
            })

        const {data} = request
        localStorage.setItem('token',data.token)
        window.location.replace('http://localhost:3000')
        

        }catch(error){
            console.log(error)
            console.log(this.state)
            alert("Tu usuario o contrasena son incorrectos, por favor revisalos")
        }
    }
    handleInputChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
          })
          
          
    }
    componentDidMount(){
        if(!Object.keys(this.props.users).length){
            this.props.traerTodo()
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
        return (
            <div>
            <div id="login__content">
                        <img src="https://i2.wp.com/thehappening.com/wp-content/uploads/2017/06/portada-55.jpg?fit=1024%2C694&ssl=1" alt="Login" />
                        
                        <div className="login__center">
                            <h2>Inicio de Sesión</h2>
                            <p><strong>¡Bienvenido!</strong> Es momentos de unas carnitas <span role="img" aria-label="sheep"> &#128536;</span></p>

                            <form  onSubmit={this._onSubmit}>
                                <label><strong> Usuario:</strong></label>

                            <input type="text"
                            placeholder="Nombre de Usuario"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                        />
                        <label><strong>Contraseña:</strong></label>
                    <input type="password" 
                    placeholder="Contraseña"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    required
                    />
                    
                    
                            <input id="btn"  type="submit" value="Enviar"/>
                            </form>
                    </div>
        </div>
    </div>
        )
    }
}
const mapStateToProps = (reducers)=>{
    return reducers.personalReviewReducer;
}
export default  connect(mapStateToProps,PersonalReviewActions)(personalReview);
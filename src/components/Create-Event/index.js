import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as CreateEventActions from '../../actions/createEventActions';
import axios from 'axios';
// import Content from './Content';
// import Spinner from '../General/Spinner';
// import Fatal from '../General/Fatal';
 


class createEvent extends Component{
    componentDidMount(){
        axios.get('http://localhost:8000/profiles/')
        .then(res=>{
            console.log(res)
        })
        
    }
    constructor(props){
        
        super(props)
        this.state ={
            user:{ username:'',first_name:'' , last_name:'',email:'',password:''},
            phoneNumber:'',
            avatar:null,
            active:false,
            streetAddress:'',
            postalCode:''
        }
    }
    changeUserHandler=(e)=>{
        const{user} ={...this.state};
        const currentState = user
        const {name,value} =e.target
        currentState[name]=value;
        this.setState({user:currentState})
    }
    changeBoolHandler=(e)=>{
        this.setState(prevState=>({
            active:!prevState.active
        }))
    }

    changeImageHandler=(e)=>{
        var self = this
        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onload = function(upload){
            self.setState({avatar:upload.target.result})
        }
        reader.readAsDataURL(file)
        console.log(this.state.avatar)
        // this.setState({avatar:e.target.files[0]})
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    // submitHandler=(e)=>{
    //     e.preventDefault()
    //     console.log(this.state);
    //     let form_data = new FormData();

    //     form_data.append('avatar',this.state.avatar,this.state.avatar.name)
    //     form_data.append('username',this.state.username)
    //     form_data.append('first_name',this.state.first_name)
    //     form_data.append('last_name',this.state.last_name)
    //     form_data.append('email',this.state.email)
    //     form_data.append('password',this.state.password)
    //     form_data.append('phoneNumber',this.state.phoneNumber)
    //     form_data.append('active',this.state.active)
    //     form_data.append('streetAddress',this.state.streetAddress)
    //     form_data.append('postalCode',this.state.postalCode)
    //     console.log(JSON.stringify(form_data))
    //     axios.post('http://localhost:8000/profiles/',form_data,{
    //         body:JSON.stringify(form_data),
    //         headers:{
    //             'content-type':'multipart/from-data'
    //         }

    //     }).then(res=>res.json())
    //     .then(response => console.log('Success',JSON.stringify(response)))
    //     .catch(error=> console.log('Error',error));
    // }

    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        const input  = this.state
        fetch('http://localhost:8000/profiles/',{
            method:'POST',
            body: JSON.stringify(input),
            headers:{
                'Content-type':'application/json'
            }
            }).then(res=>res.json())
            .then(response => console.log('Success',JSON.stringify(response)))
            .catch(error=> console.log('Error',error));
        }

    // ponerContenido = ()=>
    // {
    //     if(this.props.cargando){
    //         return <Spinner/>
    //     }
    //     if(this.props.error)
    //     {
    //         return <Fatal mensaje ={this.props.error}/>
    //     }
    //     return <Content/>
    // }
    render(){
        // const {username,email} =this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name ="username" placeholder="Username" value={this.state.username} onChange={this.changeUserHandler}/>
                    </div>
                    <div>
                        <input type="text" name ="first_name" placeholder="Nombre" value={this.state.first_name} onChange={this.changeUserHandler}/>
                    </div>
                    <div>
                        <input type="text" name ="last_name" placeholder="Apellido" value={this.state.last_name} onChange={this.changeUserHandler}/>
                    </div>
                    <div>
                        <input type="email" name ="email" placeholder="Email" value={this.state.email} onChange={this.changeUserHandler}/>
                    </div>
                    <div>
                        <input type="password" name ="password" placeholder="Password" value={this.state.password} onChange={this.changeUserHandler}/>
                    </div>
                    <div>
                        <input type="number" name ="phoneNumber" placeholder="Telefono" value={this.state.phoneNumber} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="file" name ="avatar" accept="image/png, image/jpeg" onChange={this.changeImageHandler}/>
                    </div>
                    <div>
                        <input type="checkbox" name ="active" value={this.state.active} onChange={this.changeBoolHandler}/>
                        <label> Soy Mesero</label>
                    </div>
                    <div>
                        <input type="text" name ="streetAddress" placeholder="Calle" value={this.state.streetAddress} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="number" name ="postalCode" placeholder="CP" value={this.state.postalCode} onChange={this.changeHandler}/>
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
                {/* {this.ponerContenido()} */}
            </div>
        )
    }
}
const mapStateToProps = (reducers)=>{
    return reducers.createEventReducer;
}
export default  connect(mapStateToProps,CreateEventActions)(createEvent);
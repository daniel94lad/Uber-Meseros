import React from 'react';
import {Component} from 'react';
import Content from './Content';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

class LandingPage extends Component {
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
                {this.ponerContenido()}
            </div>
        )
    }
}

export default LandingPage;
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as PersonalReviewActions from '../../actions/personalReviewActions';
import Content from './Content';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';


class personalReview extends Component{
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
const mapStateToProps = (reducers)=>{
    return reducers.personalReviewReducer;
}
export default  connect(mapStateToProps,PersonalReviewActions)(personalReview);
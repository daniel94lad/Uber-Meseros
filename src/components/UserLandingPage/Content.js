import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../General/UserNavbar';

const Content=()=>{
    return(
        <div>
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
            <h1>Hola mundo</h1>
        </div>
    )
}
const mapStateToProps=(reducers)=>{
    return reducers.userLandingPageReducer
}
export default connect(mapStateToProps)(Content);
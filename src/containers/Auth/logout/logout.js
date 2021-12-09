import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import  * as action from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount() {
        this.props.authLogout();
    }
    render(){
        return  <Redirect to='/' />
    
}
}
const dispatchToPrpos = (dispatch) => {
    return{
        authLogout :()=> dispatch(action.authLogout())
    }
}
export default connect(null,dispatchToPrpos)(Logout);
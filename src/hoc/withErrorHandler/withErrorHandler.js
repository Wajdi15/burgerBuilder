import React , {Component} from 'react';
import Aux from '../Aux';
import Modal from '../../UI/modal/modal'
const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {
        state = {
            error : null
        }
        errorConfirmedHandler =  () => {
            this.setState({error : null})
        }
        componentWillMount(){
           this.reqInterceptor = axios.interceptors.request.use(request => {
                return request;
            },error =>{
                this.setState({error : error.message});
                
            });

            this.resInterceptor = axios.interceptors.response.use(response => {
                return response;
            },error =>{
                this.setState({error : error.message});
                
            });
        }
        componentWillUnmount(){
            axios.interceptors.request.eject( this.reqInterceptor)
            axios.interceptors.response.eject( this.resInterceptor)
        }

            render(){
                return ( <Aux>
                    <Modal show = {this.state.error} click={this.errorConfirmedHandler} >
                        <p>{this.state.error}</p>
                    </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Aux> )
            }
        }
    }
export default withErrorHandler;
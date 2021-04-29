import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{

        constructor(props){
            super(props);
            axios.interceptors.request.use(req =>{
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response.use(res => res, error =>{
                this.setState({error: error});
            });
            
        }
        
        state = {
            error: null
        }

        //error modal won't be visible. needs to use componentWillMOUNT OR
        //constructor
        // componentDidMouncomponentt(){
           
        // }
        // componentWillMount(){
        //     this.reqInterceptor = axios.interceptors.request.use(req =>{
        //         this.setState({error: null});
        //         return req;
        //     });

        //     this.resInterceptor = axios.interceptors.response.use(res => res, error =>{
        //         this.setState({error: error});
        //     });
        // }

        // componentWillUnmount(){
        //     //to remove the interceptors
        //     axios.interceptors.request.eject(this.reqInterceptor);
        //     axios.interceptors.response.eject(this.resInterceptor);
        // }



        errorComfirmedHandler = () =>{
            this.setState({error: null})
        }
        render(){
            return (
                <Auxiliary>
                    <Modal show = {this.state.error} modalClosed={this.errorComfirmedHandler}>
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Auxiliary>
            );
        }

    }
       
}

export default withErrorHandler;
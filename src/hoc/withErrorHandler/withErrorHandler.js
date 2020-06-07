import React from 'react';

//components
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilary/Auxilary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error:null
        }
        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({error:null});
            });
            axios.interceptors.response.use(null,error => {
                this.setState({error:error});
            });
        }
        render () {
            return (
                <Aux>
                    <Modal show={this.state.error}>
                        {this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }

    } 
}

export default withErrorHandler;
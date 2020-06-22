import React , {Component} from 'react';

//css
import classes from './ContactData.css';

//components
import Button from '../../../components/UI/Button/Button'; 
import Spinner from '../../../components/UI/Spinner/Spinner'; 
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name : '',
        email: '',
        address : {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // alert('You Continue!');
        this.setState({loading:true});   
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name:'Anshumant',
                address:{
                    street: 'test street',
                    zipCode: '784225',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }        
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading:false});
            });
    }

    render () {
        let form = (
            <form>
                <input type='text' name='name' placeholder='Your Name'/>
                <input type='email' name='email' placeholder='Your Email'/>
                <input type='text' name='street' placeholder='Street'/>
                <input type='text' name='Postal' placeholder='Postal'/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form> 
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}
 
export default ContactData;
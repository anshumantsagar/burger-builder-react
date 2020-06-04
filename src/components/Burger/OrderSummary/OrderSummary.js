import React from 'react';

//components
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button'

class OrderSummary extends React.Component {
    //This could be a functional component, dosen't have to be a class one
    componentWillUpdate(){
        console.log('[OrderSummary] will update')
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
            </li>);    
        });
        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: Rs.{this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType={'Danger'} clicked={this.props.purchasedCanclled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={this.props.purchasedContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}  

export default OrderSummary;
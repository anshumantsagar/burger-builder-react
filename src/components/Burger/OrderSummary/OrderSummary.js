import React from 'react';

//components
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>);    
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType={'Danger'} clicked={props.purchasedCanclled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchasedContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;
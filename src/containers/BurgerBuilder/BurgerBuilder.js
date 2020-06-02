import React from 'react'

//components
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
    }
    render () {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>Build Controls</div>
            </Aux>
        );
    }
};

export default BurgerBuilder;
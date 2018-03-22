import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.6,
    meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 1,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const oldD =  INGREDIENT_PRICES[type];
        const newPrice = oldPrice + oldD;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const deductionPrice =  INGREDIENT_PRICES[type];
        const newPrice = oldPrice - deductionPrice;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addHandler={this.addIngredientHandler}
                    removeHandler={this.removeIngredientHandler}
                    disabled={disabledInfo}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
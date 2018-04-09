import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (ev) => {
        ev.preventDefault();
        this.setState({ loading: true });
        const purchaseData = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Jan Gustavson',
                adress: {
                    street: "Petrov's 1",
                    zipCode: '490321',
                    country: 'Germany'
                },
                email: 'jan@mail.com'
            },
            deliveryMethod: 'fast'
        }
        axios.post('/orders.json', purchaseData)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Your contact data:</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
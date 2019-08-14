import React from 'react';
import Card from 'react-credit-cards';
import { Form, Button } from 'semantic-ui-react';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentDetails extends React.Component {
    state = {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: ''
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            // validate here
        } else if (target.name === 'expiry') {
            // validate here
        } else if (target.name === 'cvc') {
            // validate here
        }

        this.setState({ [target.name]: target.value });
    };

    handleResetForm = () => {
        this.setState({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: ''
        })
    }

    render() {
        const { name, number, expiry, cvc, focused } = this.state;

        return (
            <div>
                <h4>Enter Your Card Details</h4>
                <Card
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focused}
                />
                <Form ref={e => (this.form = e)}>
                    <Form.Group>
                        <Form.Input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            pattern="[\d| ]{16,22}"
                            required
                            value={this.state.number}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            width={4}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            width={4}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            type="tel"
                            name="expiry"
                            placeholder="MM/YY"
                            pattern="\d\d/\d\d"
                            required
                            value={this.state.expiry}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            width={2}
                        />
                        <Form.Input
                            type="tel"
                            name="cvc"
                            placeholder="CVC"
                            pattern="\d{3,4}"
                            required
                            value={this.state.cvc}
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            width={2}
                        />
                    </Form.Group>
                </Form>
                <Button type='submit'>PAY</Button>
                <Button onClick={this.handleResetForm}>RESET</Button>
            </div>
        );
    }
}


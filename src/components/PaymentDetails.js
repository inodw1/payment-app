import React from 'react';
import Card from 'react-credit-cards';
import { Row, Col } from "reactstrap";
import { Form, Button, Dimmer, Loader, Segment, Label } from 'semantic-ui-react';
import 'react-credit-cards/es/styles-compiled.css';
import Payment from 'payment';
import { connect } from "react-redux";
import { changeActiveStatus } from "../redux/actions/index";

class PaymentDetails extends React.Component {
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

    clearNumber = (value = '') => {
        return value.replace(/\D+/g, '');
    }

    formatExpiry = (value) => {
        const clearValue = this.clearNumber(value);

        if (clearValue.length >= 3) {
            return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
        }

        return clearValue;
    }

    formatNumber = (value) => {
        if (!value) {
            return value;
        }

        const issuer = Payment.fns.cardType(value);
        const clearValue = this.clearNumber(value);
        let nextValue;

        switch (issuer) {
            case 'amex':
                nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                    4,
                    10,
                )} ${clearValue.slice(10, 15)}`;
                break;
            case 'dinersclub':
                nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                    4,
                    10,
                )} ${clearValue.slice(10, 14)}`;
                break;
            default:
                nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                    4,
                    8,
                )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
                break;
        }

        return nextValue.trim();
    }

    formatCVC = (value, allValues = {}) => {
        const clearValue = this.clearNumber(value);
        let maxLength = 4;

        if (allValues.number) {
            const issuer = Payment.fns.cardType(allValues.number);
            maxLength = issuer === 'amex' ? 4 : 3;
        }

        return clearValue.slice(0, maxLength);
    }

    handleInputChange = ({ target }) => {
        if (target.name === 'number') {
            target.value = this.formatNumber(target.value);
        } else if (target.name === 'expiry') {
            target.value = this.formatExpiry(target.value);
        } else if (target.name === 'cvc') {
            target.value = this.formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    handleResetForm = () => {
        this.setState({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: '',
            CardDetails: {}
        })
    }

    handleSubmit = () => {
        let CardDetails = {
            number: this.state.number,
            name: this.state.name,
            expiry: this.state.expiry,
            cvc: this.state.cvc,
        }

        let status = {
            active: false,
            disabled: true
        }

        this.setState({
            CardDetails: CardDetails
        })
        this.props.changeActiveStatus(status);
    }

    render() {
        const { name, number, expiry, cvc, focused } = this.state;

        return (
            <div>
                {this.props.active ?
                    <div>
                        <Card
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                        />
                        <Form ref={e => (this.form = e)} onSubmit={this.handleSubmit}>
                            <h4>Enter Your Card Details</h4>
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
                            <Button type='submit'>PAY</Button>
                            <Button onClick={this.handleResetForm}>RESET</Button>
                        </Form>
                    </div>
                    :
                    <div>
                        <Segment style={{height: '50vh'}}>
                            <Dimmer active inverted>
                                <Loader size='large' onClick={() => {window.location.reload()}}><Label color='blue'>CLICK HERE TO RESET</Label></Loader>
                            </Dimmer>
                        </Segment>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        active: state.active,
        disabled: state.disabled
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveStatus: status => dispatch(changeActiveStatus(status))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails);


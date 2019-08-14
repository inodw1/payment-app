import React from 'react'
import { Icon, Step, Segment } from 'semantic-ui-react'
import PaymentDetails from './PaymentDetails';
import { connect } from "react-redux";

class ContentComponent extends React.Component {
    render() {

        return (
            <div className="p-3">
                <Step.Group widths={2}>
                    <Step active={this.props.active}>
                        <Icon name='credit card' />
                        <Step.Content>
                            <Step.Title>Payment Details</Step.Title>
                        </Step.Content>
                    </Step>
                    <Step active={this.props.disabled}>
                        <Icon name='info' />
                        <Step.Content>
                            <Step.Title>Payment Processing</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>
                <PaymentDetails />
                {this.props.disabled &&
                    <Segment attached>
                        <p> CARD NO - {this.props.card_data.number} </p>
                        <p> NAME - {this.props.card_data.name} </p>
                        <p> VALID THRU - {this.props.card_data.expiry} </p>
                        <p> CVC - {this.props.card_data.cvc} </p>
                    </Segment>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        active: state.active,
        disabled: state.disabled,
        card_data: state.card_data
    };
};

export default connect(mapStateToProps)(ContentComponent);
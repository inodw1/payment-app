import React from 'react'
import { Icon, Step } from 'semantic-ui-react'
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
                {/* <Segment attached> */}
                <PaymentDetails />
                {/* </Segment> */}
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

export default connect(mapStateToProps)(ContentComponent);
import React from 'react'
import { Icon, Image, Segment, Step } from 'semantic-ui-react'
import PaymentDetails from './PaymentDetails';

const ContentComponent = () => (
    <div className="p-3">
        <Step.Group widths={2}>
            <Step active>
                <Icon name='credit card' />
                <Step.Content>
                    <Step.Title>Payment Details</Step.Title>
                </Step.Content>
            </Step>
            <Step disabled>
                <Icon name='info' />
                <Step.Content>
                    <Step.Title>Payment Processing</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
        <Segment attached>
            <PaymentDetails />
        </Segment>
    </div>
)

export default ContentComponent
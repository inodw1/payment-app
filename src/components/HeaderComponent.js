import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderComponent = () => (
  <div className="mt-4">
    <Header as='h2' icon textAlign='center'>
      <Icon name='credit card' circular />
      <Header.Content>Pay Now</Header.Content>
    </Header>
  </div>
)

export default HeaderComponent
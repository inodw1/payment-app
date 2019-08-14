import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'
import NoeticLogo from '../assets/noetic.png';

const HeaderComponent = () => (
  <div>
    {/* <Image centered size='large' src={NoeticLogo} /> */}
    <Header as='h2' icon textAlign='center'>
      <Icon name='credit card' circular />
      <Header.Content>Pay Now</Header.Content>
    </Header>
  </div>
)

export default HeaderComponent
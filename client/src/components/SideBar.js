import React from 'react';
import { Container, Sidebar, Menu, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FeedExampleEventsProp from './Feed';

class SidebarRightUncover extends React.Component {
  state = { visible: false }

  toggleVisibility = () => (
    this.setState({ visible: !this.state.visible })
  
  )

// make a function where the feed will change to show the page
// that the user is on when the path changes to to a different page.

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button color="blue" onClick={this.toggleVisibility}>Show Menu</Button>
        <Sidebar.Pushable as={Container}>
          <Sidebar
            as={Menu}
            animation='uncover'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='home'>
              <Link to >
                <Icon name='home' />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='friends'>
              <Link to='' >
                <Icon name='users' />
                Friends
              </Link>
            </Menu.Item>
            <Menu.Item name='all_users'>
              <Link to='/allpeople' >
                <Icon name='find' />
                All Users
              </Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Container>
              <br />
              <FeedExampleEventsProp />
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRightUncover;
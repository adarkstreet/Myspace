import React from 'react';
import { Container, Grid, Sidebar, Menu, Icon, Feed, Segment, Header, Card, Image, Divider, Button } from 'semantic-ui-react';
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
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Container}>
          <Sidebar
            as={Menu}
            animation='uncover'
            width='wide'
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
              <Icon name='friends' />
              Friends
            </Menu.Item>
            <Menu.Item name='all_users'>
              <Icon name='all_users' />
              All Users
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Container height="100%">
              <FeedExampleEventsProp />
            </Container>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRightUncover;
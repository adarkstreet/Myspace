import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SidebarRightUncover from './SideBar';
import PostTextInput from './PostInput';

class Home extends Component {
  state = {}

  render() {
    return (
      <Container>
        <div>
            <SidebarRightUncover></SidebarRightUncover>
        </div>
        <div>
          <PostTextInput />
        </div>
      </Container>
    )
  };
}

export default Home;
import React, { Component } from 'react';
import { Container, Grid, Header, Card, Image, Divider, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SidebarRightUncover from './SideBar';

class Home extends Component {
  state = {}



  render() {
    return (
      // <Header as='h1' textAlign='center'>Myspace Remastered</Header>
      <SidebarRightUncover></SidebarRightUncover>
    );
  }
}

export default Home;

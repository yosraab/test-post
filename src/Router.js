import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import ListUsers from './components/pages/ListUsers';
import Posts from './components/pages/Posts';
export const AppNavigator = createStackNavigator(
  {
    ListUsers: { screen: ListUsers },
    Posts: { screen: Posts },
  }
);

const Root = createAppContainer(AppNavigator);


const mapStateToProps = state => ({
  nav: state.nav,
});
export const AppWithNavigationState = connect(mapStateToProps)(Root);

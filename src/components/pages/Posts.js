import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import {List}  from '../common';
import {fetchPostsByUser} from '../../actions/posts';

 class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      users: []
    };
  }

  
  async componentDidMount() {
    this.setState({ isLoading: true });

   await this.props.fetchPostsByUser(this.props.navigation.getParam('id', 'NO-ID'));
    this.setState({
      data: this.props.posts, isLoading:false
    })
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
       
        <View style={{ flex: 1, backgroundColor: '#2f363c' }}>
          {this.state.isLoading ? (
            <View
              style={{
                ...StyleSheet.absoluteFill,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ActivityIndicator size="large" color="#bad555" />
            </View>
          ) : null}
          <List data ={this.state.data} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = store => {
    return {
      posts: store.posts,
    };
  };
  export default connect(
    mapStateToProps,
    { fetchPostsByUser }
  )(Posts);



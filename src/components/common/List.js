import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

renderItem = ({ item }) => (


  <TouchableOpacity
    style={{ minHeight: 70, padding: 5 }}
    onPress={() => {
      this.props.navigation.navigate('Posts', {id:`${item.id}` });
    }}
  >

    <Text style={{ color: '#bada55', fontWeight: 'bold', fontSize: 26 }}>
      {item.name}

    </Text>

  </TouchableOpacity>
);

const List = (props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={() => (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50
          }}
        >
          <Text style={{ color: '#bad555' }}>No Contacts Found</Text>
        </View>
      )}
    />
  );
};


export { List };

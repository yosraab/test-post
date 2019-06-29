import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const ElementDetail = (props) => {
	return (
        <View style={styles.ElementDetailContainer}>
            <Text style={styles.FirsttextStyle}>{props.label}: </Text>
            <Text style={styles.SecondtextStyle}>{props.detail}</Text>
        </View>
    );
};

const styles = {
  ElementDetailContainer: {
     alignSelf: 'stretch',
     height:30,
     flexDirection: 'row',
     backgroundColor: '#fff',
  },
  FirsttextStyle: {
    fontSize:16,
    color:'#000'
  },
  SecondtextStyle: {
     fontSize:14,
     color:'#000'
  }
};
export { ElementDetail };

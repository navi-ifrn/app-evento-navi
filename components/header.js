/**
 * Created by sedir on 01/09/17.
 */
// Import libs
import React from 'react';
import {Text, View, StatusBarIOS} from 'react-native';
import {Constants} from 'expo';

// Make a component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.text}</Text>
    </View>
  );
};


// Define styles
const styles = {
  viewStyle: {
    backgroundColor: '#dedede',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60 + Constants.statusBarHeight,
    paddingTop: Constants.statusBarHeight,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    elevation: 10,
    zIndex: 10,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20
  }
};

// Export component
export default Header;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Icon} from "react-native-elements";

export default class EventSchedule extends React.Component {

  renderContent(){
    const { name, time, type } = this.props.data;
    const { containerStartEnd, containerDefault, iconStyle, textTimeStyle, textContainer } = styles;

    let icon;

    switch (type) {
      case 'startend':
        return (
          <View style={containerStartEnd}>
            <Text style={{fontWeight:'bold'}}>{time} - {name}</Text>
          </View>
        );
      case 'lecture':
        icon = 'commenting';
        break;
      case 'break':
        icon = 'cutlery';
        break;
      case 'short_course':
        icon = 'code';
        break;
      case 'panel':
        icon = 'columns';
        break;
      default:
        icon = 'info';
        break;
    }
    return (
      <View style={containerDefault}>
        <Icon
          iconStyle={iconStyle}
          name={icon}
          type='font-awesome' />
        <View style={textContainer}>
          <Text>{name}</Text>
          <Text style={textTimeStyle}>{time}</Text>
        </View>
      </View>
    );
  }

  render(){
    return(
      <Card containerStyle={{marginBottom:5, marginTop:0}}>
        {this.renderContent()}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  containerStartEnd:{
    alignItems: 'center'
  },
  iconStyle:{
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  textTimeStyle: {
    fontSize: 12
  },
  containerDefault:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventSchedule from './eventschedule';

export default class EventDate extends React.Component {

  renderSchedule(){
    return this.props.data.schedule.map(
      (event_schedule,i) => {
        return <EventSchedule key={i} data={event_schedule} />
      }
    );
  }

  render(){
    const { date, place } = this.props.data;
    const { containerTitle, containerStyle, textTitle, textSubtitle } = styles;

    return(
      <View style={containerStyle}>
        <View style={containerTitle}>
          <Text style={textTitle}>{ date }</Text>
          <Text style={textSubtitle}>{ place }</Text>
        </View>
        {this.renderSchedule()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textSubtitle: {
    fontSize: 16
  }
});

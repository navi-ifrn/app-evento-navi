import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/header';
import EventSchedule from './components/eventwidget';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="I Workshop do NAVI"/>
        <EventSchedule/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

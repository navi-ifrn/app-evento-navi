import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import EventDate from './eventdate';

export default class EventWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      eventData: null,
      loading: true
    }
  }

  componentWillMount() {
    axios.get('http://inscricao.navi.ifrn.edu.br/api')
      .then(response => this.setState({eventData: response.data, loading: false}))
      .catch(error => this.setState({loading: false}));
  }

  renderDates() {
    return this.state.eventData.event_dates.map(
      event_date => {
        return <EventDate key={event_date.date} data={event_date} />
      }
    )
  }

  render() {
    const { loading } = this.state;

    if (loading)
      return <ActivityIndicator />;
    else
      return (
        <ScrollView style={{flex: 1}} >
          {this.renderDates()}
        </ScrollView>
      );
  }
}
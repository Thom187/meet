import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = location === 'all' ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents)
      });
    });
  }

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number
    });
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {

      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events)
          });
        }
      });
    }
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className='App' />
    return (
      <div className='App'>
        <h1>Meet</h1>
        <div className='filters'>
          <h3>Choose your city</h3>
          <div className="WarningAlert">
            {!navigator.onLine && (
              <WarningAlert
                text={
                  'Seems like you are offline. Please check your connection for updated events.'
                }
              />
            )}
          </div>
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents
            num={this.state.numberOfEvents}
            updateNumberOfEvents={(num) =>
              this.updateNumberOfEvents(num)}
          />
        </div>
        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <h4>Events in each city</h4>
          <ResponsiveContainer height={400} >
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}>
              <CartesianGrid />
              <XAxis type='category' dataKey='city' name='city' />
              <YAxis type='number' dataKey='number' name='number of events' allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill='#8884d8' />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;

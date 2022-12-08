import React, { Component } from 'react';

class Event extends Component {

  state = { collapsed: true };
  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div>
        <h1 className='summary'>
          {event.summary}
        </h1>
        <p className='event-start'>
          {new Date(event.start.dateTime).toString()}
        </p>
        <p className='event-location'>
          {`@${event.summary} | ${event.location}`}
        </p>
        <button className='details-button' onClick={() => this.toggleDetails()}>
          {collapsed ? 'show' : 'hide'} details
        </button>
      </div>
    );
  }
}

export default Event;
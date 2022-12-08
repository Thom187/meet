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

    return (
      <div>
        <h1 className='summary'>
          {event.summary}
        </h1>
      </div>
    );
  }
}

export default Event;
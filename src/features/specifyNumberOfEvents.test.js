import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  let AppWrapper;
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the number of displayed events has not been specified by the user', () => {

    });

    when('event list is shown', () => {
      AppWrapper = mount(<App />);
    });

    then('the number of events displayed should be the default number', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('user has not specified the number of displayed events to user input', () => {
      AppWrapper = mount(<App />);
    });

    when('user specifies the number of displayed events to user input', () => {
      AppWrapper.update();
      const NumberOfEventsWrapper = AppWrapper.find('NumberOfEvents');
      const eventObject = { target: { value: 4 } };
      NumberOfEventsWrapper.find('.num').simulate('change', eventObject);
    });

    then('the number of events displayed should be equal to that specified number', () => {
      AppWrapper.update();
      expect(AppWrapper.state('numberOfEvents')).toEqual(4);
    });
  });
});
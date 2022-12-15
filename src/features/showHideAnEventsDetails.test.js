import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('a list of events has opened', () => {

    });

    when('user scrolls through events', () => {
      AppWrapper = mount(<App />);
    });

    then('all details should be hidden', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('list of events has opened', () => {
      AppWrapper = mount(<App />);
    });

    when('user clicks on a event', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-button').at(0).simulate('click');
    });

    then('the event details should be expanded', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('event details has expanded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event .details-button').at(0).simulate('click');
    });

    when('user clicks hide button', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-button').at(0).simulate('click');
    });

    then('event details should be hidden', () => {
      expect(AppWrapper.find('.event .event-details')).toHaveLength(0);
    });
  });

});
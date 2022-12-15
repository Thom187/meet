Feature: Show/hide event details

  Scenario:  An event element is collapsed by default
    Given a list of events has opened
    When user scrolls through events
    Then all details should be hidden

  Scenario: User can expand an event to see its details
    Given list of events has opened
    When user clicks on a event
    Then the event details should be expanded

  Scenario: User can collapse an event to hide its details
    Given event details has expanded
    When user clicks hide button
    Then event details should be hidden
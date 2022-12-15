Feature: Show/hide event details

  Scenario: When user hasn’t specified a number, 32 is the default number

    Given the number of displayed events has not been specified by the user
    When event list is shown
    Then the default number of events displayed should be 32

  Scenario: User can change the number of events they want to see

    Given user has specified the number of displayed events to 4
    When the event list is shown
    Then the number of events displayed should be 4
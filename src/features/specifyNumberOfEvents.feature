Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the number of displayed events has not been specified by the user
    When event list is shown
    Then the number of events displayed should be the default number

  Scenario: User can change the number of events they want to see
    Given user has not specified the number of displayed events to user input
    When user specifies the number of displayed events to user input
    Then the number of events displayed should be equal to that specified number
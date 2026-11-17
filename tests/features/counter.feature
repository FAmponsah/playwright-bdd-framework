Feature: Counter
  As a user of the playground app
  I want to change the counter with the buttons
  So that I can see the value update

  Background:
    Given I am on the counter page

  Scenario: Counter starts at zero
    Then the counter value should be 0

  Scenario Outline: Clicking a button updates the counter
    When I click the "<button>" button <times> times
    Then the counter value should be <expected>
    And I take a screenshot named "counter-<button>-x<times>"

    Examples:
      | button | times | expected |
      | +1     | 3     | 3        |
      | +2     | 2     | 4        |
      | -1     | 1     | -1       |
      | -2     | 2     | -4       |

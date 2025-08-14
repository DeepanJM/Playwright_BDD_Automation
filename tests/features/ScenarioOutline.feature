# This file is part of the Playwright BDD Automation project.
#This is know as a Scenario Outline in Cucumber, which allows for parameterization of scenarios.
#The feature is designed to test the login functionality of the Mercury Newtours application.

Feature: Login for mercury newtours

  Scenario: Login with valid username and password pass value in examples
    Given providing valid url
    When providing valid username as "<name>" and password as "<password>"
    Then clicking the login button

    Examples:
      | name    | password |
      | mercury | mercury  |
      | mercury | mercury  |

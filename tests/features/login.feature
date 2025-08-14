Feature: Login for mercury newtours

  Scenario: Login with valid username and password
    Given providing valid url
    When providing valid username and password
    Then clicking the login button

#   Scenario: Login with valid username and password pass value in step
#     Given providing valid url
#     When providing valid username as "mercury" and password as "mercury"
#     Then clicking the login button

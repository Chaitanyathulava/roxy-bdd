Feature: Homepage

  Scenario: Verify homepage title
    Given I open the homepage
    Then I should see "ROXY" in the title

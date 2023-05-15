Feature: Log Into Compass Application

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I was directed to landing page
  

    Examples:
      | username                | password     |
      | s-tst-navi-CRM@psav.com | Winter23$    | 
  
Feature: Verify order search for Navigator application

  Scenario Outline: 1 (C55804) As a user, I should verify Order number search Scenario
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order id under order search tab
    Then I verify order id exists in the search results

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

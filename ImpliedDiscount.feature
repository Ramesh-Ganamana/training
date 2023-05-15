Feature:  C56060: Verify No Implied discount is applied for location set to Yes for Classic Orders

  Scenario Outline: As a user, I can Verify ImpliedDiscount Applied 
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When Set location 
    When Selecting Classic Order From Search Results
     When Select the jobs Tab
     Then validating Classic orders should not Allow special rates on all items
    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
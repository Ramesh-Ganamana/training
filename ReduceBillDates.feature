 
 Feature:C56059: Add Implied discount to an item ( Reduce Billable Days )

 Scenario Outline: As a user, I can Verify ReduceBillDates Applied 

    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When Setup location 
    When Selecting  Order From Search Results
    When Selecting  the jobs Tab


     Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
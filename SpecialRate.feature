Feature:  Add Special Rate to an production order Item ( Implied Discount)

  Scenario Outline: As a user, I can Verify Discount Applied 
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When click on the Location Change and set Location
    When Click On Ordername
    When Click On Jobstab
    When click On ItemTab
    # When click On Package and subpackage
    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Feature: Verify job search for Navigator application

  Scenario Outline: As a user, I can Verify Job Number Field
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I click on jobSearch tab
    When I search for the job id under job search tab
    Then I verify job id exists in the search results

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: As a user, I can Verify Order Num Search Field
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I click on jobSearch tab
    When I search for the order Num under job search tab
    Then I verify Order Number exists in the search results page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: As a user, I can Verify Order Name Search Field
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I click on jobSearch tab
    When I search for the order Name under job search tab
    Then I verify Order Name exists in the search results page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: As a user, I can Verify Choose Order Status  Field
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I click on jobSearch tab
    When I search for the choose Job Status under job search tab
    Then I verify choose  Job Status  exists in the search results page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: As a user, I can Verify Update Job Status Scenario
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I Clicked on Update Job  jobSearch tab
    When I search for the Update Job Status under job search tab
    Then I verify Update  Job Status  exists in the search results page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

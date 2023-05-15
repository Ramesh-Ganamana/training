Feature:C55767:Import Jobs

 Scenario Outline: As a user, I can I can importsJobs in same locatioin 

     Given I am on the navigatorLogin page
     When I login with <username> and <password>
     Then I was directed to landing page
     When  Setupping location 
     When  jobActions Implementation
     Then validating the  importjobs
     When Click on the Search button Waiting for the new location jobs
     Then Validating the NewJobs Button is enabled 
     Then verifying done button is enabled
     Then OrderNumer Validation
      Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

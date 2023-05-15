Feature:C55766:Import Jobs

 Scenario Outline: As a user, I can importsJobs in different locatioin 

     Given I am on the navigatorLogin page
     When I login with <username> and <password>
     Then I was directed to landing page
     When location setup
     When Implementing jobActions
     When Setuping another Location
     Then validating the  import jobs
     When Click on the Search button Wait for the new location jobs
     Then verifying the NewJobs Button is enabled 
     Then verifying done button 
     Then RoomBooth validation
      Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

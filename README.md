This is a sample test project that is created on Playwright with JS / TS. This follows POM framework and have utilised some of the 
Playwright features like Fixtures to get the functionalities up and running. 

This is integrated with Github Actions where the event trigger that is used in workflow_dispatch and push. I have set this on purpose so that we can manually trigger the run and the run 
happens when there is a code push

How To:
1. Clone the repo
2. Change the directory to project directory
3. Do npm install to download the dependencies
4. Run the command "npm run test" as in package.json
   Since this is set up for Github Actions, the headless property in playwright config file is set to true. If you want to run it on local, change it to false and then run it.

Some of the items that couldn't be implemented due to timeline:
1. Allure reporting
2. .env file for encrypting the username and password

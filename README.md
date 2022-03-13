# which-assignment
This is a project created solely as an assignment for organization Which?. This doesn't use any proprietary softwares.

## Author
Suprith Gangawar <suprith_4989@yahoo.com>

## Pre requisites
npm <br/>
cypress <br/>
pip3 <br/>
python3 <br/>
Any IDE (IntelliJ, Pycharm) to view the tree structure <br/>

## 3 Important functional tests
### 1. Filter Functionality (Automated in cypress/integration/testWhich.spec.js)

Verify if the filter feature given in the left pane works as expected. <br/>

Steps to Perform: <br/>
a. Visit the URL <br/>
b. Scroll down a little bit to see all filter options on basis of screen size, price, brand etc <br/>
c. Click on screen size filter range "20-28" <br/>
d. Check if the appropriate product is displayed in right pane <br/>

Expected Behavior: <br/>
a. User should be presented with the televisions page <br/>
b. Filters of all sort are listed in the left pane <br/>
c. Filter for screen size is applied <br/>
d. Products of specified screen size should be displayed in right pane

Current Behaviour: <br/>
a. Products of specified screen size are displayed in right pane

### 2. Sorting Functionality

Verify if the sorting feature works as expected. <br/>

Steps to Perform: <br/>
a. Visit the URL <br/>
b. Scroll down to be able to view the sorting drop down <br/>
c. Click on it and select 'Price (low to high)' option from drop down <br/>
d. Check if products displayed in right pane are displayed as expected <br/>

Expected Behavior: <br/>
a. User should be able to see the television page <br/>
b. Once sorting applied, televisions ranging from low to high price end should be displayed

Current Behaviour: <br/>
a. Televisions ranging from low to high price end are displayed

### 3. Product Review

Verify clicking any particular listed item and observe the behaviour <br/>

Steps to Perform: <br/>
a. Visit the URL <br/>
b. Click on an entry displayed without applying any filter or sorting

Expected Behavior:
<br/>
a. Product details such as Key features, Test score, Pros and Cons should be displayed

Current Behaviour:
<br/>
a. Product details such as Key features, Test score, Pros and Cons are displayed

## Installation and Usage
1. Clone the repo using command: 'git clone {repo link}'
2. Switch to the repo: 'cd {repo name}'
3. Run the test case file: 'cypress run --spec cypress/integration/<spec file name>
4. Or simply use the direct download option and install cypress. This will let you open the project directly in the cypress dashboard.
5. Open the installed Cypress application
6. Drag your project into the window or manually open it
7. Run the test case spec file
8. Observe the cypress window for test case status


## Important Files
cypress/cyppress.json - Has entries to adjust window size of the browser such that all the features are displayed </br>
cypress/package.json - Has all dependencies, versions and repository information </br>
cypress/support/index.js - Has code block to save cypress from failing from uncaught exceptions </br>
cypress/integration/testWhich.spec.js - Has the actual test case within 'describe' and 'it' block </br>
cypress/support/pageObjects/common.js - Has all the selectors from the web pages for ease of use for the user & to track them all in a single file </br>
which-assignment/Screenshot 2022-03-11 at 3.36.55 PM.png - Screenshot taken when test ran successfully at my local

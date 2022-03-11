# which-assignment
This is a project created solely as an assignment for organization Which?. This doesn't use any proprietary softwares.

## Author
Suprith Gangawar <suprith_4989@yahoo.com>

## Pre requisites
npm
cypress
pip3
python3
Any IDE (IntelliJ, Pycharm) to view the tree structure

## 3 Important functional tests
### 1. Filter Functionality (Automated in cypress/integration/testWhich.spec.js)

Verify if the filter feature given in the left pane works as expected.
Steps to Perform:
a. Visit the URL
b. Scroll down a little bit to see all filter options on basis of screen size, price, brand etc
c. Click on screen size filter range "20-28"
d. Check if the appropriate product is displayed in right pane

Expected Behavior:
a. User should be presented with the televisions page
b. Filters of all sort are listed in the left pane
c. Filter for screen size is applied
d. Products of specified screen size should be displayed in right pane

Current Behaviour:
a. Products of specified screen size are displayed in right pane

### 2. Sorting Functionality

Verify if the sorting feature works as expected.
Steps to Perform:
a. Visit the URL
b. Scroll down to be able to view the sorting drop down
c. Click on it and select 'Price (low to high)' option from drop down
d. Check if products displayed in right pane are displayed as expected

Expected Behavior:
a. User should be able to see the television page
b. Once sorting applied, televisions ranging from low to high price end should be displayed

Current Behaviour:
a. Televisions ranging from low to high price end are displayed

### 3. Product Review

Verify clicking any particular listed item and observe the behaviour
Steps to Perform:
a. Visit the URL
b. Click on an entry displayed without applying any filter or sorting

Expected Behavior:
a. Product details such as Key features, Test score, Pros and Cons should be displayed

Current Behaviour:
a. Product details such as Key features, Test score, Pros and Cons are displayed

## Installation and Usage
1. Clone the repo using command: 'git clone <repo link>'
2. Switch to the repo: 'cd <repo name>'
3. Run the test case file: 'cypress run --spec cypress/integration/<spec file name>
4. Observe the cypress window for test case status

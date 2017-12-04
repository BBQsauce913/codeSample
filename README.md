# codeSample

Blooom Code Sample.

Functional Requirements:
A User who is 15 years from retirement signs up. 
The User has a $50,000 retirement account that is incorrectly allocated. Examples below.
Evaluate the User’s Current Portfolio for stock/bond ratio and category allocation.
Trade a User’s portfolio into the Target Portfolio following these guidelines
1. Match target stock/bond ratio
2. Match target portfolio categories
3. Minimize portfolio expenses
The Target Portfolio is defined in Appendix A.
Use only Available Funds that are defined in Appendix B.

---------------------------------------------------------------

So Ill be a up front, we only covered a limited amount of algorithms, so I did a couple different things to quickly showcase what I can do.

First, in the codeSample directory, there is a Command Line Interface called 'app.js'. It allows a user to input their retirement amount and targeted percentages for each investment type, and then it outputs how much money to invest in each option. I used the 'inquirer' package for this. 

Second, I created a full web app that demenstrates this in a more static way. There is a home page that can take you to two other pages. First is the problem we are trying to solve under the 'Fund Find Example page. There you hit the test button and it displays the dollar amounts that the example user would invest in each category based off of their preffered percentages (this is generated using some vanilla javascript). Under that I used an AJAX call to display the best funds based off of their expense ratio that the user would then invest the designated amounts in. The tab labeled '$$$' takes you to all the funds we have available (also an AJAX call). This app I used Express.Js to set up the server, I set up some basic api/html routings in the 'routing' folder, the JSON objects of the funds are in the 'data' folder.


Steps to start:
1. Download the 'codeSample' Github Repo.
2. NPM Install dependencies.
3. `node app` to start the CLI.
4. `node server` to start locally hosting the full web application (localhost: 8080).


Algorithm:
Beacause I wasnt able to implement the algorithm as best as I could, here is some pseodocoding of the solution.

I would take array of all the funds (in the data folder called 'funds.js) create a loop that iterates over the array and match the category types. Then iterated over again to take the fund in each category with the lowest expenseRatio. Then with the same basic logic I used in the 'app.js' The retirement amound would be divided into the appropriate percentages layed out in the problem also splitting the portfolio into the required stocks/bonds percentages as well.

Please feel free to email or call me with any questions!

Thanks,
Chris Daschke
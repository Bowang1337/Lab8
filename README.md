# Lab8_Starter

## Author(s):
- Bozhi Wang

## LIVE SERVER UNABLE TO START ON PORT 5500, MY TESTS RUN ON PORT 5501 (OKAYED BY SATYAM GUPTA)

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

   Within a Github action that runs whenever code is pushed. 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

   No, using a single unit test to test the "message" feature of a messaging application would not suffice as there are numerous cases in the feature that the unit test cannot account for.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

   Yes, using a unit test to test the "max message length" feature of a message application would be a perfect implementation of a unit test that can be ran after every push to see whether the case still holds.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

   If we ran our puppeteer tests with the field "headless" set to true, the Chromium brower UI would probabaly be omitted - leaving us with a view of our web application that would not reflect changes in the outer browser elements.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

   The beforeAll callback would include an additional line await page.click('img[src$="./styles/settings.svg"]'); that instructs puppeteer to click on the settings icon and start from there before every test case.


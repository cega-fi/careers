# Frontend Hiring Exercises

```
TIMEBOX:    1 hours max.
LANGUAGES:  Typescript, React, HTML / CSS
WEB2 FRAMEWORKS: React and any libraries you want. If you can use Mantine (https://mantine.dev/) or MUI(https://mui.com/), that would be a bonus.
TESTS:      not mandatory
DOCS:       not mandatory
```

# Overview
We're evaluating your ability to build a simple React crypto component based on user requirements. Work your way through each User Story one at a time.

The best solution is one that is easy for the end-user and easy for developers to debug/test/extend. We should be able to run your solution locally and visualize the results in a browser.

# Submission instructions
1. Take a screen-recording of your work with video turned on (this is for validation reasons for the in-person rounds). Please share this link with us.
2. If you used an online IDE (eg. Replit), please send us the link. If you coded locally, please create a new **private repository** for your exercise and add the Cega hiring team members as private collaborators (We do this to preserve your anonymity.)
  * [Vic](https://github.com/vizhang)
  * [Marcos](https://github.com/marcossilvabr)


## Exercise 1: Crypto Input
### Overall Goal:
* We're going to be designing a currency conversion input field that converts a user-input amount of USD dollars into Dogecoin tokens and displays the amount of dogecoin tokens the user will receive.
* The API endpoint for current Dogeprice is: https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd

### User Story #1: Basic Token Conversion
* WHEN a user inputs the amount of USD into an input box
* THEN text should display the amount of Dogecoin I would receive. Formatted like "Amount of Dogecoin: ## tokens". The conversion rate should happen automatically while the user input is being entered.
* for example: If the current exchange rate is $1 USD for 2 Dogecoin, and the user inputs 2, then they should see Dogecoin: 4 tokens

### User Story #2: Toggles between Dogecoin and USD
* WHEN a user presses a button titled "Switch"
* THEN amount input should switch to Dogecoin instead of USD
* THEN the text that displays the converted token should update correctly

### User Story #3: CSS Styling
* Add a token icon to the right of the input box when the input amount is in Dogecoin
* Use the following icon asset: https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256

### User Story #4: Text Formatting
* USD can only have up to 2 decimal places
* Dogecoin can only have up to 8 decimal places

### User Story #5: Error Handling
* WHEN the Coingecko API goes down, there should be an error message that appears below the conversion text.


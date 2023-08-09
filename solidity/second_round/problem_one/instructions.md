# Solidity Hiring Exercise #1

```
TIMEBOX:    2-4 hours max.
LANGUAGES:  Solidity, Hardhat, Typescript
WEB3 FRAMEWORKS: 
TESTS:      Anchor tests
DOCS:       nice to have, but not mandatory
```

# Overview
We're evaluating your ability to take a set of requirements and build a solution that demonstrates craftsmanship, thoughtfulness and attention to detail. The best solution is one that is easy for the end-user and easy for developers to debug/test/extend.

We should be able to run your solution locally with test-cases!

# Details
## Exercise 1: Multichain Wallet Connections
You will be building a short-selling vanilla options vault contract based on the tokenized vault standard (ERC-4626). The options that must be supported are:
 - Short Call Options
 - Short Put Options

All option contracts are european style which means they can only be exercised after expiration. Vaults deposit and settle in stablecoins (eg. USDC).

We have provided you with a stub of a contract that includes an empty contract which has access to a mock Oracle asset (ETH). To price the options contract, you can use the following equation. In production, options pricing is much more [complex](https://www.khanacademy.org/economics-finance-domain/core-finance/derivative-securities/black-scholes/v/introduction-to-the-black-scholes-formula).

Options pricing formula:
```
options_premium = ( 100 * number_of_days_until_expiration ) ^ 0.5
```

### User Story: As the protocol
* I want to be able to create a short-call or short-put vault based on any asset supported by the Oracle (eg. Chainlink supported assets)
* I want to be able to set any expiration date for the options contracts (in the future)
* I want to be able to set a deposit window for users into the vault of no more than 7 days from the start of the trade date

### User Story: As the market maker
*note: Any wallet can be a market-maker for the contract as long as they provide at least the minimum options premium required for the trade.*
* I want to market-make for a vault by supplying at least the minimum options premium required by the vault after the deposit window
* I want to claim back the correct amount of profit-or-loss from the contract after trade expiration

### User Story: As a defi degen user
* I want to be able to deposit into the vault and take a position in the options vault
* I want to be able to withdraw my vault tokens and get back an expected amount of tokens (in both the In-The-Money and Out-Of-The-Money scenarios)

# Submitting your exercise

1. See [instructions for submitting your work](https://github.com/cega-fi/careers/blob/main/README.md#general-instructions)

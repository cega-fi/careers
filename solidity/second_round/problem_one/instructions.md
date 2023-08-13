# Solidity Hiring Exercise #1

```
TIMEBOX:    2-4 hours max.
LANGUAGES:  Solidity, Hardhat, Typescript
WEB3 FRAMEWORKS: 
TESTS:      Hardhat tests
DOCS:       nice to have, but not mandatory
```

# Overview
We're evaluating your ability to take a set of requirements and build a solution that demonstrates craftsmanship, thoughtfulness and attention to detail. The best solution is one that is easy for the end-user and easy for developers to debug/test/extend.

We should be able to run your solution locally with test-cases!

# Details
## ETH Short-Put Options Vault
You will be implementing a few methods to create a short-put vanilla options vault contract based on the tokenized vault standard (ERC-4626). Vanilla options have four strategies (long put, long call, short put, short call) but for the purpose of this exercise we'll just focus on the short-put strategy.

If you need a primer on put-selling, you can visit this [link](https://www.khanacademy.org/economics-finance-domain/core-finance/derivative-securities/put-call-options/v/american-put-options).

The option vault will reflect the following trading parameters:
 - deposit asset: USDC
 - underlying asset: any ERC-20 token
 - underlying asset spot price: based on Oracle (this is given to you)
 - settlement style: european
 - trade tenor: minimum of 1 day, maximum 1 year
 - options premium: this value is provided for you through a dummy method (see `getOptionsPremium` method).

We have provided you with a stub of a contract that includes an empty ERC-4626 contract that has access mock oracles.

Options premium pricing formula:
```
options_premium = ( 100 * tenor_in_days ) ^ 0.5
```

Trade Profit and Loss (`trade_pnl`) formula:
```
MAX(strike_price - settlement_price, 0)
```

Options payoff formula:
```
payoff = options_premium - trade_pnl
```

## Vault Cycle Flow Architecture
### 1. Create the Vault
- Initialize your vault contract with the structure and trade parameters
### 2. Pre-Trade:
- Users deposits USDC into the vault and gets back vault tokens. This method is given you to already.
### 3. Trading:
- Market Maker agrees to take the trade. Once agreed, they are the only party that can settle the trade at trade expiry.
- You should implement a method called `tradeVault`
### 4. Post trade expiration
- To settle, you have to calculate what the payoff is using the formula provided above. You should implement a method called `settleVault` which calculates what the payoff is and then makes the correct transfer amount.
- Only the market maker that traded the vault is allowed to settle.
### 4. Withdrawals
- User can withdrawal funds from the vault by exchanging their valt tokens

## Example Vault
 - underlying asset: wBTC
 - underlying asset spot price: wBTC Oracle
 - settlement style: european
 - trade start date: July 1, 2023 at 2pm UTC
 - trade expiration date: July 15, 2023 at 2pm UTC
 - trade tenor: 14 days

# Submitting your exercise
1. See [instructions for submitting your work](https://github.com/cega-fi/careers/blob/main/README.md#general-instructions)

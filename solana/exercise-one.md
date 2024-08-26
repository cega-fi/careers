# Solana Hiring Exercise #1

```
TIMEBOX:    2-4 hours max.
LANGUAGES:  Rust, Anchor, Javascript/Typescript
WEB3 FRAMEWORKS: N/A
TESTS:      Anchor tests with instructions for how to run in README.
```

# Overview

We're evaluating your ability to take a set of requirements and build a solution that demonstrates craftsmanship, thoughtfulness and attention to detail. The best solution is one that is easy for the end-user and easy for developers to debug/test/extend.

We should be able to run your solution locally with test-cases!

# Exercise - Secondary Markets for Cega Vault SPL Tokens

You will be implementing a program that allows users to sell their Cega Vault Tokens (SPL). The problem you are solving for is that Cega trades last 27 days. This means you won't be able to exit your trade unless you find a buyer for your tokens.

The basic selling process will be a Limit Order, where the seller states their price and buyers can buy at that price. If you need a primer on Limit Orders, take a look here: [Gemini Primer](https://www.gemini.com/cryptopedia/crypto-trading-strategies-trading-basics-limit-orders#:~:text=A%20limit%20order%20is%20a,are%20not%20guaranteed%20to%20execute).

The limit order must take the following user inputs:

- Amount of Vault Token SPLs for sale
- Price per Vault Token (assume USDC)
- Duration limit order is valid (user can select 1,7,30 days)

## User Stories

1. As a User, I can create a limit order for my token
2. As a User, I can cancel my existing limit order
3. As a User, I can modify a limit order (any parameters) unless it is already partially sold

## Buyer Stories

1. As a Buyer, I can buy tokens from any limit order that is valid (not expired by time)
2. As a Buyer, I can partially fill the limit order (eg. User trying to sell 1000, but buyer buys 123)

## Example Limit Order Trade

1. Victor creates a limit order to sell 100 Cega Vault SPL Tokens at 1 USDC, that lasts for 24 hours
2. 10 hours later, Janson comes to buy 20 Cega Vault SPL Tokens from Victor's limit order
3. 2 days later, Janson tries to come back and buy the rest but realizes that the Limit Order already expired

## Edge Cases + Bonus Considerations

- Handle price per vault token in non USDC tokens (eg. USDT, SOL, WIF)

# Implementation

- Please create an Anchor program
- Please write tests to support / handle the stories as needed

# Submitting your exercise

1. See [instructions for submitting your work](https://github.com/cega-fi/careers/blob/main/README.md#general-instructions)

# Solana Hiring Exercise #1

```
TIMEBOX:    2-4 hours max.
LANGUAGES:  Rust, Anchor, Javascript/Typescript
WEB3 FRAMEWORKS: N/A
TESTS:      Anchor tests with instructions for how to run in README.
```

# Overview

We're evaluating your ability to take a set of requirements and build a solution that demonstrates craftsmanship, thoughtfulness, and attention to detail. The best solution is one that is easy for the end-user and easy for developers to debug/test/extend.

We should be able to run your solution locally with test cases!

# Exercise - Binary Options Contract

You will be implementing a program that allows a User and a Market Maker to enter into a "Binary Options" contract. Similar to roulette, you win or lose it all. The house (aka contract) takes a 1% fee.

The Binary Options Contract will support an oracle price. You can choose any oracle provider you wish. Common ones are Pyth, Chainlink and Switch Board.

## User Stories

1. As a Market Maker, I can create a binary option with a specified bet condition using an Oracle.
2. As a User, I can accept a binary option and place my bet against the Market Maker.
3. As a User or Market Maker, I can view the status of my bets.

## Contract Details

- Creator of contract specifies a condition (e.g., "ETH price won't exceed 3000") and a time limit.
- Creator of contract deposits amount of USDC into the contract that matches their bet condition.
- User accepts the bet by depositing a matching amount of USDC.
- At the end of the period, the contract checks the Oracle price at the exact time specified.
- The winner receives the total funds minus a 1% house fee.

## Example Binary Options Trade

1. Market Maker creates a bet: "ETH price won't exceed 3000 in 2 days at 2pm UTC (eg. July 1, 2024, 2pm UTC)" with 1000 USDC.
2. User accepts and bets 100 USDC.
3. At expiration time, the contract checks the Oracle and determines losers and winners.
4. Funds are distributed based on the outcome.

## Edge Cases + Bonus Considerations

- Handle different oracle sources.
- Allow early exit with penalties.
- Implement dynamic fee structures.

# Implementation

- Please create an Anchor program.
- Please write tests to support / handle the stories as needed.

# Submitting your exercise

1. See [instructions for submitting your work](https://github.com/cega-fi/careers/blob/main/README.md#general-instructions)

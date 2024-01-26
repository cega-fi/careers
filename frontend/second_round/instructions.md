# Frontend Hiring Exercises

```
TIMEBOX:    up to 24 hours.
LANGUAGES:  Typescript, React, HTML / CSS
WEB2 FRAMEWORKS: React and any libraries you want. We use Mantine (https://mantine.dev/) and MUI(https://mui.com/).
WEB3 FRAMEWORKS: Wagmi/Ethers.js on Ethereum
TESTS:      nice to have, but not mandatory
```

# Overview
We're evaluating your ability to take a set of requirements and build a solution that demonstrates craftsmanship, thoughtfulness and attention to user experience. The best solution is one that is easy for the end-user and easy for developers to debug/test/extend.

# Choose from the following exercises:
## Exercise 1: Custom Cega Deposit Experience
In this exercise, you'll be using Cega's production SDK and implementing a simple deposit flow experience into one of our products.

We've given you starter code in `/src` folder to use. It comes with the basics, so check out the `App.tsx` file to get started.

Please implement the following user stories. Should you have more time, you can tackle any of the optional user stories as well. The user stories focus on functionality, not design so it is up to you to make the right UI/UX choices for each of these stories.

### Core User stories: As a defi degen user
* I can connect my wallet.
  * I should be able to choose what chain I want to connect to
  * I should be able to disconnect my wallet

* I want to see a list of products that I can invest in
  * I can see a list of products that are investable
  * Clicking on a product should take me to a deposit page

* On the deposit page, I can deposit funds into a product
  * I can see an input form that allows me to input an amount of deposit
  * I can not deposit if I am not connected to a wallet
  * I can understand that there are two separate transactions to sign. One for approval and one for the deposit. Note: you can decide how to create this experience. For inspiration, take a look at Uniswap, Aave, or 1inch.
* After a successful deposit, I can see the amount of tokens deposited into a product.

### Optional improvements:
* Advanced error handling (maximum and minimum deposits)
* Experience improvements (eg. Max input button, or other ideas up to you!)

### 💳 Wallet Details
* You can implement any wallet connector of your choice. We recommend using [Wagmi](https://wagmi.sh/react/guides/connect-wallet) for simplicity, but if you wish to use a 3rd Party wallet connector such as WalletConnect, feel free to!

### 🔌 API Details
* `/dashboard/products` returns a list of Cega products available for deposit. This matches the existing production experience you see on the [Cega](app.cega.fi) website. This is already made avaialble for you in `App.tsx`.

### 🤖 SDK Details
* The Cega SDK for interacting with v2 Dual Currency products is available via `CegaEvmSDKV2`. This SDK is already imported for you in `App.tsx`.
* Documentation for the SDK can be found [here](https://github.com/cega-fi/cega-sdk-evm/blob/main/documentation/v2.md).
* You'll need to pass in a signer as well. This you can get from your wallet provider.
* If you don't already have a RPC endpoint to use, you'll need to get one. We recommend using [Alchemy's](https://www.alchemy.com/) free plan.
* Note: testing on Arbitrum is recommended as it is significantly cheaper than using Ethereum. Most transactions should only cost ~$0.25 USD per transaction.


# Submitting your exercise
1. See [instructions for submitting your work](https://github.com/cega-fi/careers/blob/main/README.md#general-instructions)

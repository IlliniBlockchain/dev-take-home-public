# Developer Take Home Spring 2023

Dear developer applicant,

Thanks so much for your interest in Illini Blockchain! Blockchain is a quickly evolving industry, so we’re looking for developers that are comfortable picking up new tools and frameworks. As a part of the interview process, we want to offer the opportunity to demonstrate this important quality with our Developer Take Home.

For this task, **you’ll be interacting with our own contracts and deploying your own smart contract on an Ethereum test network.** Please read these instructions carefully:

### 📜 **Our contracts**

IBDevTaskPart1: [0xa853009dde3Cc37F2cA45f032d84d96941C0272d](https://goerli.etherscan.io/address/0xa853009dde3cc37f2ca45f032d84d96941c0272d#code)

IBDevTaskPart2: [0x3cd77c1ffa865D57076d1B0B321C73F55b2Ca006](https://goerli.etherscan.io/address/0x3cd77c1ffa865D57076d1B0B321C73F55b2Ca006)

Both are deployed on the Goerli test network. You can find the verified source code and ABI on Etherscan in the “Contract” tab on the linked pages.

### 📺 Our scripts

We've provided some scripts to assist you.

`createSecret.js` - Generates a random 32-byte number, and prints a hex-encoded string, i.e. 64 characters.

`check.js` - This takes in a 64 character secret as its only command-line argument and will print decrypted submissions starting with this secret. This is used to check whether submissions have been received properly while preserving applicants’ privacy.

You can find these scripts in a simple Node.js project at our public repository here.

Note: these scripts have dependencies you will need to install via `npm install`.

### 💰 **Testnet ether**

You can get free ETH for the Goerli test network using a faucet. We recommend the following: [Paradigm faucet](https://faucet.paradigm.xyz/), [Alchemy faucet](https://goerlifaucet.com/), [authenticated faucet](https://goerli-faucet.mudit.blog/), [PoW faucet](https://goerli-faucet.pk910.de/).

### 🖥️ **Development tooling**

[Remix](https://remix.ethereum.org/) is a popular in-browser smart contract IDE that makes it easy to create and deploy basic smart contracts. We recommend using Remix especially if you are completely new to smart contract development.

[Hardhat](https://hardhat.org/) is a popular framework for creating smart contract development workflows. It offers a sweet CLI and a plethora of other features. These features are not necessary for this task, but it’s another great tool for the development if you want to try it out.

We also recommend [Metamask](https://metamask.io/) as a wallet for development purposes.

### 📌 **The task**

This task is split into 2 parts. In part 1 you will be asked to write a Node.js script to encrypt a message, and use that message as an input as you call a function on one of our contracts. In part 2, you will be asked to do the same as in part 1, however you will only be able to call our contract from another contract, which you will deploy.

************Part 1************

You will need to emit a `Task` event by calling `sendTask` on our [part 1 contract](https://goerli.etherscan.io/address/0xa853009dde3cc37f2ca45f032d84d96941c0272d#code).

The `sendTask` function takes one `data` argument, for you to write us a message.

In order to protect your privacy, please encrypt your message via `encryptWithPublicKey` in [eth-crypto](https://github.com/pubkey/eth-crypto), using the [public key displayed on our smart contract](https://goerli.etherscan.io/address/0x3cd77c1ffa865D57076d1B0B321C73F55b2Ca006#readContract):

80f712a0d29c0853b3cb9459459729c2a5af5d6f528130cf149c4549b794cf951961c592d9b86695c3c2f23694c6e2472e163a29a011b7cc932817bfee9448ce

You don't need to sign your message. Hint: Be sure to `cipher.stringify()` the encrypted result. Note: You will need to run this in a [Node.js](https://nodejs.org/en/download/) environment.

In your message, please include (a) a 64-character secret generated using our script `createSecret.js` (b) your name (c) (personal or Illinois) email matching your application, (d) a link to your code used for this part in a code gist (GitHub gist, pastebin, etc.) and (e) your favorite spot you’ve eaten on campus.

Format as following:

```bash
// Format your string separating values with newlines ('\n'), e.g.
"52b0...\nAlec Chen\nalecchendev@gmail.com\nhttps://www.youtube.com/watch?v=iik25wqIuFo\ni luv fernando's!!"
```

After you’ve done this, you’ll need to call our contract somehow… :)

When you’re finished, you should see an event for your application on the [”Events” tab on Etherscan](https://goerli.etherscan.io/address/0xa853009dde3cc37f2ca45f032d84d96941c0272d#events).

************Part 2************

You will once again need to emit a `Task` event by calling `sendTask` on our [part 2 contract](https://goerli.etherscan.io/address/0x3cd77c1ffa865D57076d1B0B321C73F55b2Ca006). However this time, our contract requires you to deploy your own smart contract to initiate the call.

Format your message as specified in part 1.

************************************************Checking your submission************************************************

To check if we have received your submission correctly, we’ve written a script for you to use called `check.js`. You will pass in a single command-line argument, your 64-character secret that is at the beginning of your plaintext message, and it will output decrypted submissions that include that 64-character secret. Here is an example of running this script:

```bash
node check.js b034189027ae9508203369f4151ec75dd4c827dfca99abd11d996af98bf2b0cf
```

If you are getting a server timeout while running this script, please email alecchendev@gmail.com as soon as you can.

---

We don’t want this to take up too much of your time. We expect this task (including both parts) to take less than 3-4 hours. If it's taking you longer than that, you can submit the code that you have through our submission form [here](https://docs.google.com/forms/d/e/1FAIpQLSdntr2MH-w-EnrkL8yDFfJ_USGLAXJcJrmqy9jYd9SEQViyRQ/viewform?usp=sf_link).

**Please submit by the due date: 11:59PM Sunday, February 5**

### 🔑 **Tips**

General smart contract resources: [Ethereum Docs](https://ethereum.org/en/developers/docs/smart-contracts/) (checkout prerequisites if you’re new to Ethereum), [Breaking Down Smart Contracts](https://mirror.xyz/0x06CcfaB8c54e64BBFEc51c86027b471d4A600923/d_vGn_rxFCTbVQ8zPJf0uLSAKFFziUmnE7cUjsylSQc)

Solidity resources: [Solidity Docs](https://docs.soliditylang.org/en/v0.8.11/), [Solidity by Example](https://solidity-by-example.org/)

Don’t overthink the code! This take home is mainly about the tooling.

If you need help, you are always welcome to reach out at illiniblockchainrecruitment@gmail.com. We won’t answer questions if we think you should be able to figure out the answer on your own, but you’re free to ask!

---

Best of luck!

Illini Blockchain Developers

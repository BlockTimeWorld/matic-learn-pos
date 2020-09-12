# PoS Bridge for Matic

Run `npm i` to install dependencies<br/>

Create config.js in root directory, refer contents from config.js.template

# Tokens on Focus

"0xBTC": {
    "root": "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
    "child": "0x71B821aa52a49F32EEd535fCA6Eb5aa130085978"
  },
  
  "KIWI": {
    "root": "0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D",
    "child": "0x578360AdF0BbB2F10ec9cEC7EF89Ef495511ED5f"
  },
  
  "DUST": {
    "root": "0xbca3c97837a39099ec3082df97e28ce91be14472",
    "child": "0x556f501CF8a43216Df5bc9cC57Eb04D4FFAA9e6D"
  }

Tokens must be mapped by Matic team - you can't do it by yourself.

# Move Tokens from Mainnet to Matic

`copy config.js.kiwi config.js`

`cd ERC20`

## Step 1: Approve

`node approve.js`

wait transaction to be mined

see example https://etherscan.io/tx/0xcdb5bbbf0f923865362d3bc6ef880ebea858b5ae99e602c7e22f91d448b9ef88

## Step 2: Deposit

`node deposit.js`

wait transaction to be mined

see example https://etherscan.io/tx/0x1b2194bb184c74cbcfb5abc555d0471d117b4f55abddd4bc154974ff94000fdc

## Check Results

WAIT 10 minutes!

go to https://explorer.matic.network/address/0x578360AdF0BbB2F10ec9cEC7EF89Ef495511ED5f/read_contract

Balance of [YOUR ADDRESS]

## Trade

Use https://swapmatic.io/swap


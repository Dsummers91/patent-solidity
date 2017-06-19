# patent-solidity

deonsummers.com/patent

Each One must be in its own terminal window
1. Start Local Node

`testrpc1`

2. Start Etheruem Bridge for Oracle

`cd blockchain/ethereum-bridge`


`node bridge -H localhost:8545 -a 1`

3. Start the local backend server

`cd server`

`npm install`

`node server.js`

4. Start Local Client Server

`cd client`

`npm install`

`npm start`

5. Deploy Contracts

`cd blockchain`

`truffle migrate --reset`



Then edit the client/src/app/Patent-List.component.ts file with the new PatentLibrary Address

(this.library = this.web3.eth.contract(lib.abi).at('**Address Here**');



Enjoy

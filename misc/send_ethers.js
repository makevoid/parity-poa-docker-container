Web3 = require('web3'); web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

addrFrom = "0x7b3a44a832e5f2a5c0fd55a2982f050b738aed18"
addrTo   = "0x622718cce4c6b75923ca21e5b1293e9fd4dae25a"

eth.sendTransaction({from: addrFrom, to: addrTo, value: web3.toWei(1, "ether")})

// wait the tx to be confirmed...
Number(eth.getBalance(addrTo))

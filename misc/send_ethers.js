var Web3 = require('web3'); web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var eth = web3.eth

addrFrom = "0x7b3a44a832e5f2a5c0fd55a2982f050b738aed18"
addrTo   = "0x622718cce4c6b75923ca21e5b1293e9fd4dae25a"

// val = web3.toWei(19000000000000000000000000, "ether")
val = web3.toWei(1, "ether")
eth.sendTransaction({from: addrFrom, to: addrTo, value: val})

// wait the tx to be confirmed...
Number(eth.getBalance(addrTo))

var simpleStorageAbi  = '[{"constant":true,"inputs":[],"name":"data","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"bytes32"}],"name":"set","outputs":[],"type":"function"}]'
var simpleStorageData = "0x606060405260938060106000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806373d4a13a146041578063db80813f14606657603f565b005b604c6004805050607c565b604051808260001916815260200191505060405180910390f35b607a60048080359060200190919050506085565b005b60006000505481565b806000600050819055505b5056"

simpleStorageAbi = JSON.parse(simpleStorageAbi)


var SimpleStorage = eth.contract(simpleStorageAbi)

var opts = {
  data: simpleStorageData,
  from: addrFrom,
}

var simpleStorageCreationCb = (err, contract) => {
  if (err) {
    console.error(err.stack)
  } else {
    console.log("TX:")
    console.log(contract.transactionHash)
    console.log("Address:")
    console.log(contract.address)
  }
}

SimpleStorage.new(opts, simpleStorageCreationCb)

setTimeout(() => {
  console.log("exiting...")
}, 5000)

"use strict"

const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const eth  = web3.eth
const exec = require('child_process').exec
const c    = console

c.log(eth.pendingTransactions)
c.log(eth.getBlock('pending').transactions)

const miningStartStop = () => {
  miningStart()
  setTimeout(miningStop, 5000)
}

const miningStart = () => {
  exec('ethminer', (error, stdout, stderr) => {
    if (error) {
      c.error(`exec error: ${error}`)
      return
    }
    c.log(`stdout: ${stdout}`)
    c.log(`stderr: ${stderr}`)
  })
}

const miningStop = () => {
  exec('killall ethminer', (error, stdout, stderr) => {
    if (error) {
      c.error(`exec error: ${error}`)
      return
    }
    c.log(`stdout: ${stdout}`)
    c.log(`stderr: ${stderr}`)
  })
}

eth.filter('pending').watch((err, tx) => {
  if (err) {
    c.error("Problem when getting the latest pending block:")
    c.error(err.stack)
    return
  }
  c.log("Pending block:")
  c.log(tx)
  miningStartStop()
})
// console.log(web3.txpool.status)

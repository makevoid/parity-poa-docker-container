eth.sendTransaction({from: "0x7b3a44a832e5f2a5c0fd55a2982f050b738aed18", to: "0x622718cce4c6b75923ca21e5b1293e9fd4dae25a", value: web3.toWei(1, "ether")})

Number(eth.getBalance("0x622718cce4c6b75923ca21e5b1293e9fd4dae25a"))

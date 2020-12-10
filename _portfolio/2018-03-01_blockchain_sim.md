---
title: "Blockchain Simulator"
excerpt: "A simulation of a simple blockchain protocol."

header:
  image: /assets/images/BlockchainImageHeader.png
  teaser: /assets/images/BlockchainImage.png

permalink: /blockchain_sim

author_profile: true

tags: [Networks, Blockchain, Python, Docker, Course Projects]

date: 2018-03-01
---



For the class CMPT 434: Computer Networks we were required to complete a group project related to a topic in networking. My group chose to explore Blockchain technology for our project by implementing a simple simulation of a blockchain network.

We used python to implement a program that represented a single node in the network. There are two main components to each node in our simulation: the mining and chain resolution protocols, and the peer to peer communication protocols. When a node is started it begins to mine empty blocks of data to add to its chain. Mining consists of computing a hash for the current dataset and timestamp that matches a set difficulty. When a valid hash is discovered, the block is added to the node's chain and broadcast to other nodes on the network. At the same time as the mining begins, the node will also send out a UDP broadcast to discover other nodes on the network. Each node manages a list of nodes currently connected to the network. When it successfully mines a new block, it will broadcast it to the other nodes in the network. When a node receives a block message, it checks the cost of the received chain. If the received chain cost is equal to or greater than the node's current chain cost, the node enters a chain resolution protocol. Chain resolution is handled via TCP connection to ensure chain data arrives in the correct order.

We used Docker to simulate a network of nodes that we could run the blockchain software on. The nodes accept any binary data and will add that data to the next block being mined. 

For more details on the implementation and protocols, check out the [wiki documentation](https://github.com/KyleS22/BlockchainSimulator/wiki){:target="_blank"}, or take a look at [the repository](https://github.com/KyleS22/BlockchainSimulator){:target=
_blank"}.



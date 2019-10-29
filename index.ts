import Web3 from 'web3';
import {
  quorumEndpoint,
  node1Address,
  node2Address,
  node3Address,
  node4Address,
  node5Address,
  node6Address,
  node7Address,
} from './constant/nodes';
import {
  abi,
  contractAddress,
} from './constant/NTDContract';

const web3 = new Web3(quorumEndpoint);

// @ts-ignore
const NTDContract = new web3.eth.Contract(abi, contractAddress);

const calculateTPS = async () => {
  const currentBlock = await web3.eth.getBlock('latest');
  const transactionCount = currentBlock.transactions.length;
  console.log(transactionCount);
  const previousBlock = await web3.eth.getBlock(currentBlock.parentHash);
  // @ts-ignore
  const timeTaken = currentBlock.timestamp - previousBlock.timestamp;
  console.log(timeTaken);
  const tps = transactionCount / timeTaken;
  return tps;
};

const getQuorumStatus = async () => {
  const TPS = await calculateTPS();
  console.log(`TPS: ${TPS}`);

  const node1Balance =  await NTDContract.methods.balanceOf(node1Address).call({from: node1Address});
  console.log(`node1 Balance: ${node1Balance}`);

  const node2Balance =  await NTDContract.methods.balanceOf(node2Address).call({from: node2Address});
  console.log(`node2 Balance: ${node2Balance}`);

  const node3Balance =  await NTDContract.methods.balanceOf(node3Address).call({from: node3Address});
  console.log(`node3 Balance: ${node3Balance}`);

  const node4Balance =  await NTDContract.methods.balanceOf(node4Address).call({from: node4Address});
  console.log(`node4 Balance: ${node4Balance}`);

  const node5Balance =  await NTDContract.methods.balanceOf(node5Address).call({from: node5Address});
  console.log(`node5 Balance: ${node5Balance}`);

  const node6Balance =  await NTDContract.methods.balanceOf(node6Address).call({from: node6Address});
  console.log(`node6 Balance: ${node6Balance}`);

  const node7Balance =  await NTDContract.methods.balanceOf(node7Address).call({from: node7Address});
  console.log(`node7 Balance: ${node7Balance}`);
};

getQuorumStatus();

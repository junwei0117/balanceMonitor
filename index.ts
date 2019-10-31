import Web3 from 'web3';
import {
  node1QuorumEndpoint,
  node2QuorumEndpoint,
  node3QuorumEndpoint,
  node4QuorumEndpoint,
  node1Address,
  node2Address,
  node3Address,
} from './constant/nodes';
import {
  abi,
  bank1Address,
  bank2Address,
  bank3Address,
} from './constant/BankContract';

const initializeContractObject = (endpoint: string) => {
  const web3 = new Web3(endpoint);
  // @ts-ignore
  const bank1Contract = new web3.eth.Contract(abi, bank1Address);
  // @ts-ignore
  const bank2Contract = new web3.eth.Contract(abi, bank2Address);
  // @ts-ignore
  const bank3Contract = new web3.eth.Contract(abi, bank3Address);

  return {bank1Contract, bank2Contract, bank3Contract};
};

const getQuorumTPS = async () => {
  const web3 = new Web3(node4QuorumEndpoint);
  const currentBlock = await web3.eth.getBlock('latest');
  console.log(`Block Height: ${currentBlock.number}`);
  const transactionCount = currentBlock.transactions.length;
  const previousBlock = await web3.eth.getBlock(currentBlock.parentHash);
  // @ts-ignore
  const timeTaken = currentBlock.timestamp - previousBlock.timestamp;
  const TPS = transactionCount / timeTaken;
  console.log(`TPS: ${TPS}\n`);
};

const getBalanceFromCBC = async () => {
  console.log('CBC\'s perspective:');

  const {bank1Contract, bank2Contract, bank3Contract} = initializeContractObject(node4QuorumEndpoint);

  const node1Balance =  await bank1Contract.methods.balance().call({from: node1Address});
  console.log(`Bank1 Balance: ${node1Balance}`);

  const node2Balance =  await bank2Contract.methods.balance().call({from: node2Address});
  console.log(`Bank2 Balance: ${node2Balance}`);

  const node3Balance =  await bank3Contract.methods.balance().call({from: node3Address});
  console.log(`Bank3 Balance: ${node3Balance}\n`);
};

const getBalanceFromBank1 = async () => {
  console.log('Bank1\'s perspective:');

  const {bank1Contract, bank2Contract, bank3Contract} = initializeContractObject(node1QuorumEndpoint);

  const node1Balance =  await bank1Contract.methods.balance().call({from: node1Address});
  console.log(`Bank1 Balance: ${node1Balance}`);

  const node2Balance =  await bank2Contract.methods.balance().call({from: node2Address});
  console.log(`Bank2 Balance: ${node2Balance}`);

  const node3Balance =  await bank3Contract.methods.balance().call({from: node3Address});
  console.log(`Bank3 Balance: ${node3Balance}\n`);
};

const getBalanceFromBank2 = async () => {
  console.log('Bank2\'s perspective:');

  const {bank1Contract, bank2Contract, bank3Contract} = initializeContractObject(node2QuorumEndpoint);

  const node1Balance =  await bank1Contract.methods.balance().call({from: node1Address});
  console.log(`Bank1 Balance: ${node1Balance}`);

  const node2Balance =  await bank2Contract.methods.balance().call({from: node2Address});
  console.log(`Bank2 Balance: ${node2Balance}`);

  const node3Balance =  await bank3Contract.methods.balance().call({from: node3Address});
  console.log(`Bank3 Balance: ${node3Balance}\n`);
};

const getBalanceFromBank3 = async () => {
  console.log('Bank3\' perspective:');

  const {bank1Contract, bank2Contract, bank3Contract} = initializeContractObject(node3QuorumEndpoint);

  const node1Balance =  await bank1Contract.methods.balance().call({from: node1Address});
  console.log(`Bank1 Balance: ${node1Balance}`);

  const node2Balance =  await bank2Contract.methods.balance().call({from: node2Address});
  console.log(`Bank2 Balance: ${node2Balance}`);

  const node3Balance =  await bank3Contract.methods.balance().call({from: node3Address});
  console.log(`Bank3 Balance: ${node3Balance}\n`);
};

const start = async () => {
  await getQuorumTPS();
  await getBalanceFromCBC();
  await getBalanceFromBank1();
  await getBalanceFromBank2();
  await getBalanceFromBank3();
};

start();

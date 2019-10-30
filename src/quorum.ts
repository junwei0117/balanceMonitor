import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { abi, bank1Address, bank2Address, bank3Address } from './constant/BankContract.ts';
import { addresses } from './constant/nodes';

export interface Balance {
  from: string;
  index: number;
  address: string;
  balance: number;
}

export class Quorum {
  private name: string;
  private web3: Web3;
  private contract1: Contract;
  private contract2: Contract;
  private contract3: Contract;

  constructor(name: string, endpoint: string) {
    this.name = name;
    this.web3 = new Web3(endpoint);

    // @ts-ignore
    this.contract1 = new this.web3.eth.Contract(abi, bank1Address);
    // @ts-ignore
    this.contract2 = new this.web3.eth.Contract(abi, bank2Address);
    // @ts-ignore
    this.contract3 = new this.web3.eth.Contract(abi, bank3Address);
  }

  public getBalances = async () => {
    const balances: Balance[] = [];

    const balance1 = await this.getBalance(this.contract1, addresses[0], 0);
    balances.push(balance1);

    const balance2 = await this.getBalance(this.contract2, addresses[1], 1);
    balances.push(balance2);

    const balance3 = await this.getBalance(this.contract3, addresses[2], 2);
    balances.push(balance3);

    return balances;
  }

  public getBlockHeight = async () => {
    const block = await this.web3.eth.getBlock('latest');

    return block.number;
  }

  public getQuorumTPS = async () => {
    const currentBlock = await this.web3.eth.getBlock('latest');
    const transactionCount = currentBlock.transactions.length;
    const previousBlock = await this.web3.eth.getBlock(currentBlock.parentHash);
    // @ts-ignore
    const timeTaken = currentBlock.timestamp - previousBlock.timestamp;
    const tps = transactionCount / timeTaken;

    return tps;
  }

  private getBalance = async (contract: Contract, address: string, index: number): Promise<Balance> => {
    const balance = await contract.methods.balance().call({ from: address });

    return {
      from: this.name,
      index,
      address,
      balance: parseInt(balance, 10),
    };
  }
}

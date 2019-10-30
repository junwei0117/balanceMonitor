import { cbcEndpoint, endpoint1, endpoint2, endpoint3 } from './constant/nodes';
import { Quorum, Balance } from './Quorum';

const cbcQuorum = new Quorum('cbc', cbcEndpoint);
const quorum1 = new Quorum('bank1', endpoint1);
const quorum2 = new Quorum('bank2', endpoint2);
const quorum3 = new Quorum('bank3', endpoint3);

export const getBlockHeight = async () => {
  return cbcQuorum.getBlockHeight();
};

export const getQuorumTPS = async () => {
  return cbcQuorum.getQuorumTPS();
};

export const getBalances = async () => {
  const balances: Balance[] = [];

  return balances.concat(
    await cbcQuorum.getBalances(),
    await quorum1.getBalances(),
    await quorum2.getBalances(),
    await quorum3.getBalances(),
  );
};

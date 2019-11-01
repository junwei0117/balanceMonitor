import Koa, { Context } from 'koa';
import Router from 'koa-router';
import * as client from 'prom-client';

import { getQuorumTPS, getBlockHeight, getBalances } from './utils';

export const createApp = async (): Promise<Koa> => {
  const app = new Koa();
  const router = new Router();

  const tpsGauge = new client.Gauge({
    name: 'quorum_tps',
    help: 'Returns current TPS',
  });

  const blockHeightGauge = new client.Gauge({
    name: 'quorum_block_height',
    help: 'Returns current block height',
  });

  const balanceGauge = new client.Gauge({
    name: 'quorum_balance',
    help: 'Returns the balance for specific addresses',
    labelNames: ['index', 'address', 'from'],
  });

  router.get('/metrics', async (ctx: Context) => {
    try {
      tpsGauge.set(await getQuorumTPS());
      blockHeightGauge.set(await getBlockHeight());

      const balances = await getBalances();
      for (const balance of balances) {
        balanceGauge.set({ index: balance.index, address: balance.address, from: balance.from }, balance.balance);
      }

      ctx.body = client.register.metrics();
    } catch (error) {
      ctx.body = client.register.metrics();
      console.log(error.message);
    }
  });

  app.use(router.routes());

  return app;
};

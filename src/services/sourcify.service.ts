import * as fetch from 'node-fetch-retry';
import { Random } from 'random-js';

export class SourcifyService {
    async fetchABI(chainId: number, address: string): Promise<string> {
        let resp;
        const random = new Random();
        const url = `https://repo.sourcify.dev/${chainId}/${address}/metadata.json`;
        const options = {
          method: 'GET',
          retry: 3,
          pause: random.integer(0, 2),
          silent: true,
        };
        const response = await fetch(url, options);
        if (response.status < 400) {
          const data = await response.json();
          resp = data.output.abi;
        }
        return resp;
    }
}
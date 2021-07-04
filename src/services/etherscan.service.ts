import * as fetch from 'node-fetch-retry';
import {Random} from 'random-js';
import { chainExplorers, chainKeys } from '../common/constants';


export class EtherscanService {

    async fetchABI(chainId: number, address: string): Promise<string> {
        if(chainExplorers.has(chainId)) {
            throw 'Unsupported ChainId';
        } else {
            let resp;
            const random = new Random();
            const url = `${chainExplorers.get(chainId)}?&apikey=${chainKeys.get(chainId)}&action=getabi&address=${address}`;
            const options = {
              method: 'GET',
              retry: 3,
              pause: random.integer(0, 2),
            };
        
            const response = await fetch(url, options);
        
            if (response.status < 400) {
              const data = await response.json();
        
              if (data.status === '1') {
                resp = data.result;
              }
            }
            return resp;
        }
      }
}
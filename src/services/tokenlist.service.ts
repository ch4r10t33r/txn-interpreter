import * as fetch from 'node-fetch-retry';
import { Random } from 'random-js';
import { COINGECKO_LIST } from '../common/constants';

export class TokenlistService {

    async getTokens(chainId: number): Promise<any> {
        let resp;
        const random = new Random();
        const url = COINGECKO_LIST;
        const options = {
            method: 'GET',
            retry: 3,
            pause: random.integer(0, 2),
        };
    
        const response = await fetch(url, options);
    
        if (response.status < 400) {
            const data = await response.json();
    
            const tokens = data.tokens;
            return tokens.filter((o:any) => {
                return o.chainId === chainId;
            });
        }
    }
}
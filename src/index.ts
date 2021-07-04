import { EtherscanService, SourcifyService, TokenlistService } from "./services";

export class TxnInterpreter {
    private sourcifyService: SourcifyService;
    private etherscanService: EtherscanService;
    private tokenlistService: TokenlistService;
    constructor(options?: any) {
        if(options) {
            //initialize the default settings.
        }
        this.sourcifyService = new SourcifyService();
        this.etherscanService = new EtherscanService();
        this.tokenlistService = new TokenlistService();
    }

    async interpret(chainId: number, txn: any): Promise<string> {
        const {
            hash,
            from,
            to,
            value,
            input,
            logs,
            logsBloom,
            status,
        } = txn;


        return '';
    }
}
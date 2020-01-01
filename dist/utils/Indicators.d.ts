/**
 * Indicators Class
 */
export default class Indicators {
    log: boolean;
    constructor(log?: boolean);
    /**
     * Initialize Session
     */
    initSession(): Promise<boolean>;
    /**
     * Get Data
     */
    getData(ticker: string, interval: string): Promise<any>;
    /**
     * Print Output
     */
    private print;
    /**
     * Log Data
     */
    private logData;
    /**
     * Get Raw Data
     */
    private getRawData;
    /**
     * Parse Data
     */
    private parseData;
}

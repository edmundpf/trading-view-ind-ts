/**
 * Data Args
 */

export interface DataArgs {
	[index: string]: string | undefined,
	ticker: string,
	interval: string,
	exchange?: string,
}
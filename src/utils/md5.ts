import { MD5 } from 'crypto-js';



export const hash = (privateKey: string, ts: string, publicKey: string): string => {
    const str = `${ts}${privateKey}${publicKey}`
    return MD5(str).toString()
}

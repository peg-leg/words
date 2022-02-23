import { readFileSync } from 'fs';

export const wordles = JSON.parse(readFileSync('wordles.json'));
export default wordles;
export const nonwordles = JSON.parse(readFileSync('nonwordles.json'));

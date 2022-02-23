import { readFileSync } from 'fs';

export default JSON.parse(readFileSync('nonwordles.json'));

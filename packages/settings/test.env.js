import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), '__test/settings', '.env.test'),
})
console.log('1111111111111111111')

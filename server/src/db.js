import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(path.dirname(__dirname))
const __grandparentdir = path.dirname(path.dirname(__dirname))
console.log(path.join(__grandparentdir, 'datastore/assets/db.json'))
export const getDB = async () => {

}
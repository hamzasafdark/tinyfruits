import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __grandparentdir = path.dirname(path.dirname(__dirname))
const DB_PATH = path.join(__grandparentdir, 'datastore/assets/db.json')

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(db)
}
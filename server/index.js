import fs from 'node:fs/promises'
import http from 'node:http'
import open from 'open'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { getAllFruits } from './src/fruits'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const createServer = (notes) => {
    return http.createServer(async (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    });
}

export const start = (fruits, port) => {
    const server = createServer(fruits)
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
    open(`http://localhost:${port}`)
}
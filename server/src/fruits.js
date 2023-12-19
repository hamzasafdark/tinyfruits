import { getDB } from "./db.js";

export const getAllFruits = async () => {
    const { fruits } = await getDB()
    return fruits
}
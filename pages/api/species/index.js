// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllData } from '../../../utils/swapiWrapper';

export default async function handler(req, res) {
    const entity = process.env.SPECIES_ENTITY;
    const data = await getAllData(entity);

    res.status(200).json({ results: data })
}
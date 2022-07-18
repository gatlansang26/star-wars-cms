// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getData } from '../../../utils/swapiWrapper';

export default async function handler(req, res) {
    const query = req.query;
    const entity = process.env.PLANETS_ENTITY;
    const data = await getData(entity, query.id);

    res.status(200).json({ results: data })
}
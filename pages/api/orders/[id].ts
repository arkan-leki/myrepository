// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Order } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
    order: Order
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {


    if (req.method === 'GET') {
        try {
            const data = await prisma.order.findUnique({
                where: {
                  id: Number(req.query.id),
                },
              })
            return res.status(200).json({ data })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ msg: 'Something went wrong' })
        }
    }
    res.status(200).json({ name: 'John Doe' })
}

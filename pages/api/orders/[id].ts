// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Order } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type Data = {
    // order: Order
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {


    if (req.method === 'GET') {
        try {
            const order = await prisma.order.findUnique({
                where: {
                    id: Number(req.query.id),
                },
                include: {
                    products: true,
                },
            })
            const products = await prisma.product.findMany({
                include: {
                    devices: true,
                    _count: {
                        select: { devices: true },
                    },
                },
            })

            return res.status(200).json({ order, products })
        } catch (err) {
            console.error(err)
            return res.status(500).json({ msg: 'Something went wrong' })
        }
    }
    res.status(200).json({ name: 'John Doe' })
}

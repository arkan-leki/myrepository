// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Order, PrismaClient, Product } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

type Data = {
    order: Order,
    product: Product[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method === 'GET') {
        try {
            const order = await prisma.order.findUnique({
                where: {
                    id: req.query.id,
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
            return res.status(500).json({ msg: 'Sodmething went wrong' })
        }
    }

    if (req.method === 'POST') {
        try {
          let orderData = JSON.parse(req.body)
          let data = await prisma.productOnPosts.create({ data: orderData })
          return res.status(200).json({ data })
        } catch (err) {
          console.error(err)
          return res.status(500).json({ msg: 'Something went wrong' })
        }
      } else {
        return res.status(405).json({ msg: 'Method not allowed' })
      }

      
    // res.status(200).json({ name: 'John Doe' })
}

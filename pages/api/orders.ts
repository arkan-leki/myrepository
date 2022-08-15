// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'GET') {
    try {
      const data = await prisma.order.findMany({
        ProductOnPosts: true
      })
      return res.status(200).json({ data })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  }
  if (req.method === 'POST') {
    try {
      let orderData = JSON.parse(req.body)
      let data = await prisma.order.create({ data: orderData })

      return res.status(200).json({ data })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  } else {
    return res.status(405).json({ msg: 'Method not allowed' })
  }



  res.status(200).json({ name: 'John Doe' })
}

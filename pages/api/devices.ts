// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, Device } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

type Data = {
    data: Device[], 
    msg: String
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method === 'GET') {
        try {
            const data: Device[] = await prisma.device.findMany()
            return res.status(200).json({
                data,
                msg: 'undefined'
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({
                msg: 'Something went wrongs',
                data: []
            })
        }
    }
    if (req.method === 'POST') {
        try {
            let jsonData = JSON.parse(req.body)
            let data: any = await prisma.device.create({ data: jsonData })
            return res.status(200).json({
                data,
                msg: 'undefined'
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({
                msg: 'Something went wrong',
                data: []
            })
        }
    } else {
        return res.status(405).json({
            msg: 'Method not allowed',
            data: []
        })
    }

    // res.status(200).json({ name: 'John Doe' })
}

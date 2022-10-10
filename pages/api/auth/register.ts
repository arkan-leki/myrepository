// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

type Data = {
    data: User | null,
    msg: String
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method === 'POST') {
        try {
            let jsonData = JSON.parse(req.body)
            const data = await prisma.user.create({
                data: jsonData
            })
            const acc = await prisma.account.create({
                data: {
                    userId: data?.id
                }
            })
            return res.status(200).json({
                data: data,
                msg: 'loged in'
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({
                msg: 'Something went wrongs',
                data: null
            })
        }
    }

    res.status(200).json({ msg: 'users', data: null })
}

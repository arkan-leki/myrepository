// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


const Key = 'abbabbabbababa'

type Data = {
    token: String | undefined,
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
            const us = await prisma.user.findUnique({
                where: {
                    email: jsonData.email
                }
            })
            if (us) {
                let token = jwt.sign(
                    {
                        id: us.id,
                        email: us.email
                    },
                    Key
                );
                setCookie('token', token, { req, res, maxAge: 60 * 6 * 24 });

                await prisma.session.create({
                    data: {
                        userId: us?.id,
                        expires: new Date(new Date().getTime() + (60 * 60 * 1000)),
                        sessionToken: token
                    }
                })
            }
            if(us){
                return res.status(200).json({
                    data: us,
                    msg: 'loged in',
                    token: undefined
                })
            }
            return res.status(300).json({
                data: null,
                msg: 'wrong email',
                token: undefined
            })
        } catch (err) {
            console.error(err)
            return res.status(500).json({
                msg: 'Something went wrongs',
                data: null,
                token: undefined
            })
        }
    }

    res.status(200).json({
        msg: 'users', data: null,
        token: undefined
    })
}

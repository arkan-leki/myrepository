// This is an example of how to access a session from an API route
import { unstable_getServerSession } from "next-auth"
import NextAuth  from "./auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, NextAuth)
  res.send(JSON.stringify(session, null, 2))
}
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.get('/validateCard', async (req, res) => {
  const owned = await prisma.UsersCards.findFirstOrThrow({
     where: {/**{
      AND: [
        {},
        { filters:  {} },
        { filters: {} },
      ],
    },*/}
})

  res.json(owned)
})
const server = app.listen(3000)
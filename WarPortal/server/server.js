import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.get('/', async (req, res) => {
  const owned = await prisma.owned.findMany({
    where: { },
    include: {},
  })
  res.json(owned)
})
const server = app.listen(3000)
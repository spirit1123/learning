import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function get_all(req, res) {

}

export async function get(req, res) {
    const { id } = req.params
    const post = await prisma.post.findUnique({
        where: {
            id: Number(id),
        },
    })
    res.json(post)
}
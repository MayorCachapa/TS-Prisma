import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({data: {name: 'Romane'}}) <----- creates a user

    // const users = await prisma.user.findMany(); <------ finds all the users

    // const user = await prisma.user.findFirst({where: { <------ finds a user based on a value match
    //     id: 1
    // }})

    
}

main()
    .catch(e => {
        console.log(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })


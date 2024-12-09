import {faker} from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    
  for (let i = 0; i < 50; i++) {
    await prisma.termekek.createMany({
        data: {
          name: faker.vehicle.vehicle(),
            imgUrl: faker.image.url(),
            model: faker.vehicle.model(),
            type: faker.vehicle.type(),
            vrmp: faker.vehicle.vrm(),  
            price: faker.number.int({min:100000})
          
          
        }
    });
  };
  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    //process.exit(1)
  })
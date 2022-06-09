import { PrismaClient } from '@prisma/client';
import blogs from '../data/blogs';

const client = new PrismaClient()

async function seed() {
  await client.user.create({
    data: {
      id: "1",
      username: "test_user",
      fullname: "test user",
      email: "test_user@gmail.com",
      first_name: "test",
      last_name: "user",
      password: "test_password",
      password2: "test_password",
      role: 'ADMIN',
    },
  })

  await client.blog.createMany({
    data: blogs,
  })
}

seed()
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
  .finally(async () => {
    await client.$disconnect()
  })
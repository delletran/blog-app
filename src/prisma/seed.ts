import { PrismaClient } from '@prisma/client';
import blogs from '../data/blogs';

const client = new PrismaClient()

async function seed() {
  // await client.user.create({
  //   data: {
  //     user_id: "3",
  //     username: "test_user3",
  //     fullname: "test user3",
  //     email: "test_user3@gmail.com",
  //     first_name: "test",
  //     last_name: "user3",
  //     password: "test_password",
  //     password2: "test_password",
  //     role: 'ADMIN',
  //   },
  // })

  await client.blog.createMany({
    data: [
      {
        id: "8",
        title: "Being handsome",
        category: "TEST_CATERGORY",
        description: "How to be a president",
        published: true,
        // createdAt:  Date().toLocaleString(),
        // updatedAt:  Date().toLocaleString(),
        tags: ["President", "Rodel", "Letran", "delletran"],
        // author: "3",
      },
      // {
      //   id: `6`,
      //   title: "Always Handsome",
      //   category: "TEST_CATERGORY",
      //   description: "How to be a Handsome",
      //   published: true,
      //   tags: ["Handsome", "Rodel", "Letran", "delletran"]
      // },
    ],
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
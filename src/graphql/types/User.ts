import { enumType, intArg, objectType, stringArg,nonNull } from 'nexus';
import { extendType } from 'nexus';
import { Blog } from './Blog';
import { UserProps } from 'types';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('user_id');
    t.string('username');
    t.string('fullname');
    t.string('email');
    t.string('first_name');
    t.string('last_name');
    t.string('password');
    t.string('password2');
    t.string('createdAt');
    t.string('updatedAt');
    t.field('role', { type: Role });
    // t.string('profiles');
    t.list.field('blogs', { 
      type: Blog,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.blog
          // .findMany()
          // .blogs()
          .findUnique({
            where: {
              id: parent.user_id,
            }
          })
          // .blogs()
      }
    });
    // t.list.field('blogs', {
    //   type: Blog,
    //   async resolve(_parent, _args, ctx) {
    //     return await ctx.prisma.user
    //       .findUnique({
    //         where: {
    //           id: _parent.user_id,
    //         },
    //       })
    //       .blogs();
    //   },
    // });
  },
});

const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
});

export const UsersQuery = extendType({
  type: 'Query',
  definition: t => {
    t.nonNull.list.field('users', {
      type: 'User',
      
      // args: { id: intArg('id of the user') },
      resolve: (_root, args, ctx): any => ctx.prisma.user.findMany(),
    })
  },
})
// export const AddUserById = extendType({
//   type: 'Query',
//   definition: t => {
//     t.field('userById', {
//       type: 'User',
//       args: { id: intArg('id of the user') },
//       resolve: (root, args, ctx) => ctx.prisma.user.getById(args.id),
//     })
//   },
// })


// export const BlogsQuery = extendType({
//   type: 'Query',
//   definition(t) {
//     t.nonNull.list.field('blogs', {
//       type: 'Blog',
//     });
//   },
// });

// export const BlogsQuery = extendType({
//   type: 'Query',
//   definition(t) {
//     t.nonNull.list.field('blogs', {
//       type: 'Blog',
//       resolve(_root, _args, ctx) {
//         return ctx.prisma.user.findMany()
//       },
//     });
//   },
// });

// export const UserBlogs = extendType({
//   type: 'Query',
//   definition(t) {
//     t.list.field('favorites', {
//       type: 'Blog',
//       async resolve(_, _args, ctx) {
//         const user = await ctx.prisma.user.findUnique({
//           where: {
//             email: ctx.user.email,
//           },
//           include: {
//             blogs: true,
//           },
//         });
//         if (!user) throw new Error('Invalid user');
//         return user.blogs;
//       },
//     });
//   },
// });

// export const BookmarkLink = extendType({
//   type: 'Mutation',
//   definition(t) {
//     t.field('bookmarkLink', {
//       type: 'Link',
//       args: {
//         id: stringArg(),
//       },
//       async resolve(_, args, ctx) {
//         const link = await ctx.prisma.link.findUnique({
//           where: { id: args.id },
//         });

//         await ctx.prisma.user.update({
//           where: {
//             email: ctx.user.email,
//           },
//           data: {
//             favorites: {
//               connect: {
//                 id: link.id,
//               },
//             },
//           },
//         });
//         return link;
//       },
//     });
//   },
// });

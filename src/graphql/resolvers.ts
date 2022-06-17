import { prisma } from "lib/prisma";

const resolvers = {
  // Blog: {
  //   author(_root, _args, ctx) {
  //     return prisma.profile.findFirst( _root.id)
  //     // return ctx.prisma.blog({ id: _root.user_id }).author()
  //   },
  // },
  Query : {
    blogs: async (_root, _args, ctx) =>
      await ctx.prisma.blog.findMany(),
    users: async (_root, _args, ctx) => 
      await ctx.prisma.user.findMany(),
    profiles: async (_root, _args, ctx) =>
      await ctx.prisma.profile.findMany(),
  },
}

export default resolvers;

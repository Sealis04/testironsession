import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      ctx.session.user = "I am a user from procedure post.ts";
      console.log('Save should be happening right here')
      ctx.session.save();
      console.log('Save should have happened since user got set \n', "this is the session.user:",ctx.session.user);
      console.log("but it doesn't update the cookies or is accessible when tried to get outside");
      return;
    }),
});

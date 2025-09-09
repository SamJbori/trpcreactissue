import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const postRouter = {
  getMessage: publicProcedure.query(() => {
    return "The Secret is out, TRPC is failing on createTRPCReact!!!, should I switch to ORPC? 😁";
  }),
} satisfies TRPCRouterRecord;

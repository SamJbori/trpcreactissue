"use client";

// import { useQuery } from "@tanstack/react-query";
// import { useTRPC } from "~/trpc/react";
import { trpc } from "~/trpc/react";

export default function HomePage() {
  // const trpc = useTRPC();
  // const { data } = useQuery(trpc.post.getMessage.queryOptions());
  const { data } = trpc.post.getMessage.useQuery();

  return <div>{data}</div>;
}

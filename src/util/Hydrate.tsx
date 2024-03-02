"use client";

import { DehydratedState, HydrationBoundary } from "@tanstack/react-query";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  state: DehydratedState;
}
export default function Hydrate({ ...props }: Props) {
  return (
    <HydrationBoundary state={props.state}>{props.children}</HydrationBoundary>
  );
}

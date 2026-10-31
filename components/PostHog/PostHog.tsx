"use client";
import posthog, { CapturedNetworkRequest } from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

interface CSPostHogProviderProps {
  children: React.ReactNode;
}

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string,
    person_profiles: "identified_only",
  });
}

const CSPostHogProvider = ({ children }: CSPostHogProviderProps) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
export default CSPostHogProvider;

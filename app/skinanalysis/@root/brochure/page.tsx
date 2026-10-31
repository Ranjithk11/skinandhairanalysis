import React from "react";
import BrochureView from "@/containers/skinanalysis-home/Brochure";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import authOptions from "@/app/api/auth/[...nextauth]/utils/authOptions";

const BrouchurePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(APP_ROUTES.HOME);
  }
  return <BrochureView />;
};

export default BrouchurePage;

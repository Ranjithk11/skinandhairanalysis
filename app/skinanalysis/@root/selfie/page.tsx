import React from "react";
import TakeSelfie from "@/containers/skinanalysis-home/TakeSelfie";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import authOptions from "@/app/api/auth/[...nextauth]/utils/authOptions";

const SelfiePage = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(APP_ROUTES.HOME);
  }
  return <TakeSelfie />;
};

export default SelfiePage;

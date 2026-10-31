import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import authOptions from "@/app/api/auth/[...nextauth]/utils/authOptions";
import NewTakeSelfie from "@/containers/skinanalysis-home/NewTakeSelfie";

const DemoPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(APP_ROUTES.HOME);
  }
  return <NewTakeSelfie />;
};

export default DemoPage;

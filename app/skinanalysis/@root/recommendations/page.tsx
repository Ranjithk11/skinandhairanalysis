import React, { Fragment } from "react";
import SkinAnalysisRecommendation from "@/containers/skinanalysis-home/Recommendation";
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/api/auth/[...nextauth]/utils/authOptions";
import { APP_ROUTES } from "@/utils/routes";
import { redirect } from "next/navigation";
import VisiterLayout from "@/components/layouts/VisiterLayout";
import FooterComponent from "@/components/footer";

const RecommendationsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect(APP_ROUTES.HOME);
  }
  return (
    <Fragment>
      <SkinAnalysisRecommendation />
    </Fragment>
  );
};

export default RecommendationsPage;

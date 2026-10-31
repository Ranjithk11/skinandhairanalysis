"use client";
import React, { Fragment } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import _ from "lodash";
import { analysisSlots } from "@/utils/constants";
import HomeLayout from "@/components/layouts/HomeLayout";
import QuestionLayout from "@/components/layouts/QuestionLayout";

const AnalysisRootlayout = ({ children }: { children: React.ReactNode }) => {
  // const currentSegment = useSelectedLayoutSegment();
  // const isMatched = _.find(
  //   analysisSlots,
  //   (slot: string) => currentSegment === slot
  // );
  // if (isMatched) {
  //   return <HomeLayout>{children}</HomeLayout>;
  // } else {
  //   return <QuestionLayout>{children}</QuestionLayout>;
  // }
  return <>{children}</>;
};

export default AnalysisRootlayout;

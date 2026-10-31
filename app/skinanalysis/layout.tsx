import React, { Fragment } from "react";

const SkinAnalysisLayout = async ({
  children,
  root,
}: {
  children: React.ReactNode;
  root: React.ReactNode;
}) => {
  return (
    <Fragment>
      {children}
      {root}
    </Fragment>
  );
};

export default SkinAnalysisLayout;

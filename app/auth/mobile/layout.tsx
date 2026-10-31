import { Fragment } from "react";

export default async function RootLayout({
  children,
  root,
}: {
  children: React.ReactNode;
  root: React.ReactNode;
}) {
  return (
    <Fragment>
      {children}
      {root}
    </Fragment>
  );
}

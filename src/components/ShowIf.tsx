import React, { Fragment, ReactNode } from "react";

interface IShowIf {
  ifp: boolean;
  children: ReactNode;
}

function ShowIf({ ifp, children }: IShowIf) {
  if (ifp) {
    return <Fragment>{children}</Fragment>;
  } else {
    return <Fragment />;
  }
}

export default ShowIf;

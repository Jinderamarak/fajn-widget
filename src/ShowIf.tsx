import React, { ReactNode } from 'react';

interface IShowIf {
    ifp: boolean;
    children: ReactNode;
}

function ShowIf({ ifp, children }: IShowIf) {
    if (ifp) {
        return children;
    } else {
        return null;
    }
}

export default ShowIf;
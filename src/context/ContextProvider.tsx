"use client";

import React, { createContext, useReducer } from "react";
import { Modes, reducer } from "./state";

type Props = {
  children: React.ReactNode;
};

export const appContext = createContext(null);

const ContextProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, Modes);
  return (
    <appContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default ContextProvider;

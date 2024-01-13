import React, { useContext, useEffect } from "react";
import { appContext } from "@/context/ContextProvider";

type Props = {};

type themeHookType = {
  changeTheme: () => void;
};

const useChangeTheme = (): themeHookType => {
  const { state, dispatch }: any = useContext(appContext);

  const changeTheme = (): void => {
    if (state.dark === true) {
      dispatch({
        type: "LIGHT",
      });
    } else {
      dispatch({
        type: "DARK",
      });
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return {
    changeTheme: changeTheme,
  };
};

export default useChangeTheme;

import { useReducer } from "react";

export let Modes = {
  dark: false,
  light: false,
  color: "bg-black text-white",
};

export const reducer = (state = Modes, action: any) => {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        dark: true,
        light: false,
      };
    case "LIGHT":
      return {
        ...state,
        dark: false,
        light: true,
      };
  }
};

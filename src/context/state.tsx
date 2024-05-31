import { useReducer } from "react";

export let Modes = {
  dark: false,
  light: true,
  color: "bg-white text-black",
  iconColor: "text-black",
  navicon:"text-black",
  self_Madeicon: "black",
};

export const reducer = (state = Modes, action: any) => {
  switch (action.type) {
    case "DARK":
      return {
        ...state,
        dark: true,
        light: false,
        color: "bg-black text-white",
        iconColor: "text-white",
        navicon:"text-white",
        self_Madeicon: "white",
      };
    case "LIGHT":
      return {
        ...state,
        dark: false,
        light: true,
        color: "bg-white text-black",
        iconColor: "text-black",
        navicon:"text-black",
        self_Madeicon: "black",
      };
  }
};

/* eslint-disable no-case-declarations */

import { COLORCHANGED, STATUSCHANGED } from "./actionsType";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;

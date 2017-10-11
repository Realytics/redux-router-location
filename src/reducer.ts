import * as Actions from "./actions";
import { Location } from "history";
import { Reducer } from "redux";

export type RouterState = {
  location: Location | null;
};

/**
 * Only LOCATION_CHANGED is handled here because other action change
 * location which dispatch a LOCATION_CHANGED
 */

export function createReducer(initialLocation: Location): Reducer<RouterState> {
  return (
    state: RouterState = { location: initialLocation },
    action: Actions.LocationAction
  ): RouterState => {
    if (action && action.type === Actions.LOCATION_CHANGED) {
      // No-op the initial route action
      const { location } = state;
      if (
        location &&
        location.pathname === action.payload.pathname &&
        location.search === action.payload.search
      ) {
        return state;
      }

      return { location: action.payload };
    }
    return state;
  };
}

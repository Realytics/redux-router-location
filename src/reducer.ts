import * as Actions from './actions';
import { Location } from 'history';
import { Reducer } from 'redux';

export type RouterState = {
  location: Location | null;
  previousLocation: Location | null;
};

export function createReducer(initialLocation: Location): Reducer<RouterState> {
  return (
    state: RouterState = { location: initialLocation, previousLocation: null },
    action: Actions.LocationAction,
  ): RouterState => {
    if (action && action.type === Actions.LOCATION_CHANGED) {
      // No-op the initial route action
      const { location }: RouterState = state;
      if (location && location.pathname === action.payload.pathname && location.search === action.payload.search) {
        return state;
      }

      return { location: action.payload, previousLocation: location };
    }
    return state;
  };
}

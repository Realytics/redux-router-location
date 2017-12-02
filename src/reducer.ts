import * as Actions from './actions';
import { Location } from 'history';
import { Reducer } from 'redux';

export type RouterState = Location;

/**
 * Only LOCATION_CHANGED is handled here because other action change
 * location which dispatch a LOCATION_CHANGED
 */

export function createReducer(initialLocation: Location): Reducer<RouterState> {
  return (state: RouterState = initialLocation, action: any): RouterState => {
    if (action && action.type === Actions.LOCATION_CHANGED) {
      // No-op the initial route action
      if (state && state.pathname === action.payload.pathname && state.search === action.payload.search) {
        return state;
      }

      return action.payload;
    }
    return state;
  };
}

import { createReducer, RouterState } from '../src/reducer';
import createBrowserHistory from 'history/createBrowserHistory';
import { History } from 'history';
import { isFunction } from 'lodash';
import { Reducer } from 'redux';

describe('reducer', () => {
  const history: History = createBrowserHistory();

  it('create a reducer', () => {
    expect(isFunction(createReducer(history.location))).toEqual(true);
  });

  const reducer: Reducer<RouterState> = createReducer(history.location);

  it('return initiale state if no action', () => {
    expect(reducer(undefined, { type: 'NOT_REAL_ACTION' })).toEqual({
      location: history.location,
    });
  });

  it('handle null action', () => {
    expect(reducer(undefined, null)).toEqual({ location: history.location });
    expect(reducer({ location: history.location }, null)).toEqual({
      location: history.location,
    });
  });
});

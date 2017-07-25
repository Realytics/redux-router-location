import { History } from 'history';
import { Dispatch, Middleware } from 'redux';
import * as Actions from './actions';

export function createMiddleware(history: History): Middleware {
  return () => {
    return (next: Dispatch<any>) => {
      return (action: any) => {
        switch (action.type) {
          case Actions.PUSH:
            history.push(action.payload);
            // No return, no next() here
            // We stop all history events from progressing further through the dispatch chain...
            break;
          case Actions.REPLACE:
            history.replace(action.payload);
            break;
          case Actions.GO:
            history.go(action.payload);
            break;
          case Actions.GO_BACK:
            history.goBack();
            break;
          case Actions.GO_FORWARD:
            history.goForward();
            break;
          default:
            // ...but we want to leave all events we don't care about undisturbed
            return next(action);
        }
      };
    };
  };
}

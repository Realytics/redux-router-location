import { History } from "history";
import { Dispatch, Middleware } from "redux";
import * as Actions from "./actions";

export function createMiddleware(history: History): Middleware {
  return () => {
    return (next: Dispatch<any>) => {
      return (action: any) => {
        // Just for safety
        if (!action || !action.type) {
          return next(action);
        }
        /**
         * When one of the history action is dispatched we don't call next()
         * so the dispatched is stopped and we change the location.
         * The location change will dispatch a `LOCATION_CHANGED` action that will update the state
         */
        switch (action.type) {
          case Actions.PUSH:
            history.push(action.payload);
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
            // any other action, just lat it pass
            return next(action);
        }
      };
    };
  };
}

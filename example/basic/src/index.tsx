import * as ReactDom from 'react-dom';
import * as React from 'react';
import { createStore, Reducer, combineReducers, compose, applyMiddleware } from 'redux';
import { createEnhancer, createReducer, createMiddleware, push, RouterState } from 'redux-router-location';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

type State = {
  router: RouterState;
};

const reducer: Reducer<State> = combineReducers({
  router: createReducer(history.location),
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(createEnhancer(history), applyMiddleware(createMiddleware(history)));

const store = createStore(reducer, enhancer);

const App = () => (
  <div>
    <code>
      <pre>{JSON.stringify(store.getState().router, null, 2)}</pre>
    </code>
    <button onClick={() => store.dispatch(push('/hello'))}>Got to /hello</button>
  </div>
);

store.subscribe(() => ReactDom.render(<App />, document.getElementById('root')));

store.dispatch({ type: 'INIT' });

console.log(createEnhancer);

import { StoreEnhancerStoreCreator, Reducer, StoreEnhancer, Store } from 'redux';
import { History } from 'history';
import { locationDidChange } from './actions';

export function createEnhancer(history: History): StoreEnhancer<any> {
  return (next: StoreEnhancerStoreCreator<any>) => (
    userReducer: Reducer<any>,
    initialState: any
  ) => {
    const store: Store<any> = next(
      userReducer,
      initialState
    );

    history.listen(location => {
      store.dispatch(locationDidChange(location));
    });

    return store;
  };
}

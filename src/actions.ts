import { Location, Path, LocationDescriptorObject, createLocation } from 'history';
import { ActionCreator } from 'redux';

export const LOCATION_CHANGED: '@@ROUTER/LOCATION_CHANGED' = '@@ROUTER/LOCATION_CHANGED';
export const PUSH: '@@ROUTER/PUSH' = '@@ROUTER/PUSH';
export const REPLACE: '@@ROUTER/REPLACE' = '@@ROUTER/REPLACE';
export const GO: '@@ROUTER/GO' = '@@ROUTER/GO';
export const GO_BACK: '@@ROUTER/GO_BACK' = '@@ROUTER/GO_BACK';
export const GO_FORWARD: '@@ROUTER/GO_FORWARD' = '@@ROUTER/GO_FORWARD';

export type BareAction = {
  type: typeof GO_BACK | typeof GO_FORWARD;
};

export type IndexedAction = {
  type: typeof GO;
  payload: number;
};

export type LocationAction = {
  type: typeof LOCATION_CHANGED | typeof PUSH | typeof REPLACE;
  payload: Location;
};

export const push: ActionCreator<LocationAction> = (href: Path | LocationDescriptorObject) => ({
  type: PUSH,
  payload: createLocation(href),
});

export const replace: ActionCreator<LocationAction> = (href: Path | LocationDescriptorObject) => ({
  type: REPLACE,
  payload: createLocation(href),
});

export const go: ActionCreator<IndexedAction> = (index: number) => ({
  type: GO,
  payload: index,
});

export const goBack: ActionCreator<BareAction> = () => ({
  type: GO_BACK,
});

export const goForward: ActionCreator<BareAction> = () => ({
  type: GO_FORWARD,
});

export const locationDidChange: ActionCreator<LocationAction> = (location: Location) => ({
  type: LOCATION_CHANGED,
  payload: location,
});

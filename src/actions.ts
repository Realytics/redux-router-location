import { Location, Path, LocationDescriptorObject, createLocation } from "history";
import { ActionCreator } from "redux";

/**
 * Types
 */

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

/**
 * Action
 */

export const LOCATION_CHANGED: "@@ROUTER/LOCATION_CHANGED" = "@@ROUTER/LOCATION_CHANGED";
export const PUSH: "@@ROUTER/PUSH" = "@@ROUTER/PUSH";
export const REPLACE: "@@ROUTER/REPLACE" = "@@ROUTER/REPLACE";
export const GO: "@@ROUTER/GO" = "@@ROUTER/GO";
export const GO_BACK: "@@ROUTER/GO_BACK" = "@@ROUTER/GO_BACK";
export const GO_FORWARD: "@@ROUTER/GO_FORWARD" = "@@ROUTER/GO_FORWARD";

/**
 * Action creators
 */

export const push = (href: Path | LocationDescriptorObject): LocationAction => ({
  type: PUSH,
  payload: createLocation(href),
});

export const replace = (href: Path | LocationDescriptorObject): LocationAction => ({
  type: REPLACE,
  payload: createLocation(href),
});

export const go = (index: number): IndexedAction => ({
  type: GO,
  payload: index,
});

export const goBack = (): BareAction => ({
  type: GO_BACK,
});

export const goForward = (): BareAction => ({
  type: GO_FORWARD,
});

export const locationDidChange = (location: Location): LocationAction => ({
  type: LOCATION_CHANGED,
  payload: location,
});

import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ITownActions, ITownState } from "../towns/types/TownType";

export type IGlobalState = { town: ITownState };

export type IGlobalActions = ITownActions;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IGlobalState,
  unknown,
  IGlobalActions
>;

export type AppDispatch<ExtraArgs = unknown> = ThunkDispatch<
  IGlobalState,
  ExtraArgs,
  IGlobalActions
>;

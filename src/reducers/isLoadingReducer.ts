export interface IsLoadingState {
  loader: {
    [key: string]: boolean;
  };
}

interface IsLoadingAction {
  type: string;
}

const getLoadingMatches = (actionType: string) =>
  /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionType);

const isLoadingReducer = (state: IsLoadingState = { loader: {} }, action: IsLoadingAction) => {
  const matches = getLoadingMatches(action.type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    loader: {
      ...state.loader,
      [requestName]: requestStatus === 'REQUEST',
    },
  };
};

export default isLoadingReducer;

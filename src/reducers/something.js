import { createAction, createReducer } from 'redux-act';

const DEFAULT_STATE = {
  test: true
}

export const someAction = createAction('some action');

export default createReducer(
  {
    [someAction]: (state, test) => ({ ...state, test })
  },
  DEFAULT_STATE
)
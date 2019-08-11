import { takeLatest } from 'redux-saga/effects';

import * as somethingActions from '../reducers/something';
import * as genericSagas from './generic';

export default function* saga() {
  const relations = [[somethingActions, genericSagas]];

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeLatest(action.getType(), saga);
    }
  }
}

import {validResponse} from '@common/redux/listener';
import {takeLatestListeners} from '@listener';
import {ApiConstants, NetWorkService} from '@networking';

import {todoActions} from '../action-slice/todo';

takeLatestListeners(true)({
  actionCreator: todoActions.addChecklist,
  effect: async (action, listenerApi) => {
    await listenerApi.delay(1000);

    const response = await NetWorkService.Post({
      url: ApiConstants.TODO,
      body: {},
      signal: listenerApi.signal,
    });

    if (!response) {
      return;
    }

    if (validResponse(response)) {
      // TODO: do something when login success
    }
  },
});

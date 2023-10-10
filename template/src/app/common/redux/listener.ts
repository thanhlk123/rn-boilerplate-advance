import {appActions} from '@redux-slice';
import {createListenerMiddleware} from '@reduxjs/toolkit';
import {translate} from '@utils/i18n';
import {I18nKeys} from '@utils/i18n/locales';

export const listenerMiddleware = createListenerMiddleware();
const startAppListening = listenerMiddleware.startListening;

type StartAppListening = typeof startAppListening;

export const takeLatestListeners =
  (withLoading?: boolean): StartAppListening =>
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        await listenerApi.delay(15);

        if (withLoading) {
          listenerApi.dispatch(appActions.startProcess());
        }

        await startListeningOption.effect(action, listenerApi);

        if (withLoading) {
          listenerApi.dispatch(appActions.endProcess());
        }
      },
    });
  };

export const takeLeadingListeners =
  (withLoading?: boolean): StartAppListening =>
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        listenerApi.unsubscribe();

        if (withLoading) {
          listenerApi.dispatch(appActions.startProcess());
        }

        await startListeningOption.effect(action, listenerApi);

        if (withLoading) {
          listenerApi.dispatch(appActions.endProcess());
        }

        listenerApi.subscribe();
      },
    });
  };

export const debounceListeners =
  (msDuration: number, withLoading?: boolean): StartAppListening =>
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        listenerApi.cancelActiveListeners();

        await listenerApi.delay(msDuration);

        if (withLoading) {
          listenerApi.dispatch(appActions.startProcess());
        }

        await startListeningOption.effect(action, listenerApi);

        if (withLoading) {
          listenerApi.dispatch(appActions.endProcess());
        }
      },
    });
  };

export const throttleListeners =
  (msDuration: number, withLoading?: boolean): StartAppListening =>
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        listenerApi.unsubscribe();

        if (withLoading) {
          listenerApi.dispatch(appActions.startProcess());
        }

        await startListeningOption.effect(action, listenerApi);

        if (withLoading) {
          listenerApi.dispatch(appActions.endProcess());
        }

        await listenerApi.delay(msDuration);

        listenerApi.subscribe();
      },
    });
  };

export const handleErrorApi = (status: number) => {
  const result = {status: false, code: status, msg: ''};

  if (status >= 500) {
    result.msg = translate('error:server_error');

    return result;
  }

  if (status < 500 && status >= 418) {
    result.msg = translate('error:error_on_request');

    return result;
  }

  result.msg = translate(('error:' + status) as I18nKeys);

  return result;
};

/**
 * return true when success and false when error
 */
export const validResponse = (
  response: ResponseBase<any>,
): response is ResponseBase<any, true> => {
  if (!response.status) {
    // TODO: handle error
    return false;
  }

  return true;
};

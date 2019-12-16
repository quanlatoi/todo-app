import * as UIConstants from '../constants/index';

export const showLoading = ()=>({
    type: UIConstants.SHOW_LOADING
});

export const hideLoading = ()=>({
    type: UIConstants.HIDE_LOADING
});

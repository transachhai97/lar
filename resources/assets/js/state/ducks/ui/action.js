import uiType from "@/state/ducks/ui/type";

export const showLoading = () => ({
    type: uiType.SHOW_LOADING,
});

export const hideLoading = () => ({
    type: uiType.HIDE_LOADING,
});

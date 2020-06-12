import uiType from "@/state/ducks/ui/type";

const uiAction = {
    showLoading: () => ({
        type: uiType.SHOW_LOADING,
    }),
    hideLoading: () => ({
        type: uiType.HIDE_LOADING,
    }),
};

export default uiAction;

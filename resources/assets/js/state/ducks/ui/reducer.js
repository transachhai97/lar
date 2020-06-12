import uiType from "@/state/ducks/ui/type";

const initialState = {
    isLoading: true,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case uiType.SHOW_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case uiType.HIDE_LOADING: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            return state;
    }
};

export default uiReducer;

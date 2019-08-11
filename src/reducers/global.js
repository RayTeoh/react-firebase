const initialState = {
    isLoading: false,
};

const global = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_IS_LOADING": {
            return { ...state, isLoading: action.payload.isLoading };
        }
        default:
            return state;
    }
};

export default global;
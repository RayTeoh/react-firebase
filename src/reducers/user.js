const initialState = {
    email: ""
};
  
const user = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: payload.email,
                password: payload.password,
            };
        default:
            return state;
    }
}

export default user;
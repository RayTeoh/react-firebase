//action named setUser
export const setUser = (email, password, history) => {
  history.push("/dashboard");
  //setUser return a function =>
  // return (dispatch) => {
  //reuturn an object
  return {
    type: "SET_EMAIL",
    payload: {
      email,
      password,
    }
  };
  // }
};

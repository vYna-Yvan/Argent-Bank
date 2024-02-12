const initialeState = {
  token: null,
  user: null,
};

const userReducer = (state = initialeState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
export default userReducer;

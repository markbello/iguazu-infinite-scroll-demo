export const SET_COUNT = 'SET_COUNT';

export const setCount = (count) => ({
  type: SET_COUNT,
  payload: count,
});

export const initialState = {
  count: 50,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default appReducer;

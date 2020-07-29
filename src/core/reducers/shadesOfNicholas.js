export const SHADES_OF_NICHOLAS_LOADING = 'SHADES_OF_NICHOLAS_LOADING';
export const SHADES_OF_NICHOLAS_LOADED = 'SHADES_OF_NICHOLAS_LOADED';
export const SHADES_OF_NICHOLAS_FAILED = 'SHADES_OF_NICHOLAS_FAILED';

const shadesOfNicholasLoading = () => ({
  type: SHADES_OF_NICHOLAS_LOADING,
});

const shadesOfNicholasLoaded = (payload) => ({
  type: SHADES_OF_NICHOLAS_LOADED,
  payload,
});

const shadesOfNicholasFailed = (error) => ({
  type: SHADES_OF_NICHOLAS_FAILED,
  error,
});

export const loadShadesOfNicholas = (count) => (dispatch) => {
  dispatch(shadesOfNicholasLoading());

  fetch(`http://localhost:4000/nicholas?count=${count}`)
    .then((res) => res.json())
    .then((res) => dispatch(shadesOfNicholasLoaded(res)))
    .catch((err) => dispatch(shadesOfNicholasFailed(err)));
};

export const initialState = {
  isLoading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHADES_OF_NICHOLAS_LOADING:
      return { ...state, isLoading: true };
    case SHADES_OF_NICHOLAS_LOADED:
      return { ...state, isLoading: false, data: action.payload };
    case SHADES_OF_NICHOLAS_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;

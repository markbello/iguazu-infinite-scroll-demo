export const DOGS_LOADING = 'DOGS_LOADING';
export const DOGS_LOADED = 'DOGS_LOADED';
export const DOGS_FAILED = 'DOGS_FAILED';

const dogsLoading = () => ({
  type: DOGS_LOADING,
});

const dogsLoaded = (payload) => ({
  type: DOGS_LOADED,
  payload,
});

const dogsFailed = (error) => ({
  type: DOGS_FAILED,
  error,
});

export const loadDogs = (count) => (dispatch) => {
  dispatch(dogsLoading());

  fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
    .then((res) => res.json())
    .then((res) => dispatch(dogsLoaded(res)))
    .catch((err) => dispatch(dogsFailed(err)));
};

export const initialState = {
  isLoading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DOGS_LOADING:
      return { ...state, isLoading: true };
    case DOGS_LOADED:
      return { ...state, isLoading: false, data: action.payload };
    case DOGS_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;

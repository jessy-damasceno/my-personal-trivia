const TOKEN_KEY = 'token';
const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';

export const SET_PLAYER = 'SET_PLAYER';
export const SET_TOKEN = 'SET_TOKEN';


export const setPlayer = (name, email) => ({
  type: SET_PLAYER,
  payload: {
    name,
    email,
  },
});

const setToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});

export const getToken = (name, email) => (dispatch) => {
  dispatch(setPlayer(name, email));
  fetch(TOKEN_URL)
    .then((response) => response.json())
    .then((json) => {
      localStorage.setItem(TOKEN_KEY, json.token);
      dispatch(setToken(json.token));
    })
};

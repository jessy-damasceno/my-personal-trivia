import { SET_PLAYER, SET_TOKEN } from '../actions';

const INTIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  token: '',
};

const player = (state = INTIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_PLAYER:
      return {
        ...state,
        name: payload.name,
        gravatarEmail: payload.email,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default player;

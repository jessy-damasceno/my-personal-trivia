import { SET_PLAYER } from '../actions';

const INTIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INTIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_PLAYER:
      return {
        ...state,
        name: payload.name,
        gravatarEmail: payload.email,
      };
    default:
      return {
        ...state,
      };
  }
};

export default player;

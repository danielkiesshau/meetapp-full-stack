import { MEETUP_SET } from '../actions/meetup';

const INITIAL_STATE = {
  meetup: null
};

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case MEETUP_SET:
      return { ...state, meetup: payload.meetup };

    default:
      return state;
  }
};

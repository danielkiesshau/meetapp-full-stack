import { combineReducers } from 'redux';
import auth from './auth';
import meetup from './meetup';

export default combineReducers({
  auth,
  meetup
});

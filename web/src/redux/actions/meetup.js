export const MEETUP_SET = 'meetup-set';

export const acSetMeetup = meetup => ({
  type: MEETUP_SET,
  payload: { meetup }
});

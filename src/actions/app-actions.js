import { INIT } from 'src/constants/action-types';

export const initApp = (payload = {}) => ({
  type: INIT,
  payload,
});

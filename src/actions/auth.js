import { AUTH_DISCARD_TOKEN } from '../constants/actionsType';

export const authLogout = () => ({
  type: AUTH_DISCARD_TOKEN
});

let AUTH_API_URL = '';
let API_URL = '';

switch (process.env.REACT_APP_BUILD_ENV) {
  case 'LIVE':
    AUTH_API_URL = '';
    API_URL = '';
    break;

  case 'STAGING':
    AUTH_API_URL = '';
    API_URL = '';
    break;

  case 'DEVELOP':
    AUTH_API_URL = '';
    API_URL = '';
    break;

  case 'TEST':
    AUTH_API_URL = '';
    API_URL = '';
    break;

  default:
}

export {
  AUTH_API_URL,
  API_URL
}
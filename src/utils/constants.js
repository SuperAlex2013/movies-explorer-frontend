// Define the Movies API URL
const MOVIES_API_URL = 'https://api.nomoreparties.co';

// Define the main API URL with a fallback value
const MAIN_API_URL =
  process.env.REACT_APP_MAIN_API_URL ||
  'https://api.ultradiploma.nomoredomainsrocks.ru';

// Define error messages for different routes and HTTP status codes
const MESSAGES = {
  '/signin': {
    401: 'Invalid login or password.',
    500: 'An error occurred during authorization.',
  },
  '/signup': {
    409: 'A user with this email already exists.',
    500: 'An error occurred while registering the user.',
  },
  '/profile': {
    ok: 'Profile update successful!',
    409: 'A user with this email already exists.',
    500: 'An error occurred while updating the profile.',
  },
};

// Define constants for screen width breakpoints
const SHORT_DURATION = 40;
const MIDDLE = 1279;
const SMALL = 767;

// Define parameters for different screen sizes
const LARGE_PARAMS = { number: 12, limit: 3 };
const MIDDLE_PARAMS = { number: 8, limit: 2 };
const SMALL_PARAMS = { number: 5, limit: 2 };

// Export all the constants and configuration values
export {
  MOVIES_API_URL,
  MAIN_API_URL,
  MESSAGES,
  SHORT_DURATION,
  MIDDLE,
  SMALL,
  LARGE_PARAMS,
  MIDDLE_PARAMS,
  SMALL_PARAMS,
};

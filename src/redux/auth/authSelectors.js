const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getReplace = state => state.auth.replace;

const getError = state => state.auth.error; 

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getReplace,
  getError
};
export default authSelectors;
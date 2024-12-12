const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AUTH_START':
        return { ...state, loading: true, error: null };
      case 'AUTH_SUCCESS':
        return { ...state, user: action.payload.user, token: action.payload.token, loading: false };
      case 'AUTH_FAIL':
        return { ...state, error: action.payload, loading: false };
      case 'LOGOUT':
        return { ...state, user: null, token: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
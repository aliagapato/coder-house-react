const authReducer = (state, action) => {
  let data = state
  switch (action.type) {
    case "LOGIN":
      data = { user: action.payload, authIsReady: true }
      break
    case "LOGOUT":
      data = { user: null, authIsReady: false };
      break
    case "AUTH_IS_READY":
      data = { user: action.payload }
      break
    default:
      data = state
      break
  }
  return data
}

export default authReducer
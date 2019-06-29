
export default function users (state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return action.payload
    case 'DELETE_USER_SUCCESS':
      return state.filter((post, index) => index !== action.payload)
    default:
      return state;
  }
}

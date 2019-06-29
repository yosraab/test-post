
export default function posts (state = [], action) {
    switch (action.type) {
      case 'FETCH_POSTS_USER_SUCCESS':
        return action.payload
      default:
        return state;
    }
  }
  
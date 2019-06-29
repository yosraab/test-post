
export const fetchPostsByUser = (id) => dispatch => {
    dispatch({ type: 'FETCH_POSTS_USER_REQUEST' });
    return axios.get(`${remoteAPI}/users/${id}/posts`)
      .then(response => {
        dispatch({ type: 'FETCH_POSTS_USER_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_POSTS_USER_FAILURE', payload: error });
      });
  };
  
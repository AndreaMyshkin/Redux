// Retorna una función con una action
export default function (state = {}, action) {
  switch (action.type) {
    case 'GET_ARTISTS_ALL':
    return {...state, artistList: action.payload }
    default:
      return state
  }
}

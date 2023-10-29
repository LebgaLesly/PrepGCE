
const studyBoxReducer = (state, action) => {
    switch(action.type) {
      case 'FETCH_REQUEST':
        return {...state, loading: true};
      case 'FETCH_SUCCESS':
        return {...state, studybox: action.payload, loading: false}
      case 'FETCH_FAIL':
        return {...state, loading: false, error: action.payload}
      default:
        return state
    }
  }

  export default studyBoxReducer
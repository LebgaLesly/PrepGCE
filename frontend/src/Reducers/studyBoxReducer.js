
const studyBoxReducer = (state, action) => {
    switch(action.type) {
      case 'SET_STUDYBOX':
        return {
          studybox: action.payload
        };
      case 'CREATE_STUDYBOX':
        return {
          studybox: [action.payload, ...state.studybox]
        }
      default:
        return state
    }
  }

  export default studyBoxReducer
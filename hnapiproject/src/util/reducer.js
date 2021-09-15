export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_HITS':
      return {
        ...state,
        loading: false,
        hit: action.payload.hit,
        nbpages: action.payload.nbpages,
      };
      case 'HANDLE_SEARCH':
        return {
          ...state,
          loading: true,
          
        }
    default:
      throw new Error(`No Matches ${action.type} action type`);
  }
};

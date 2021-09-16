export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_HITS":
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "HANDLE_SEARCH":
      return {
        ...state,
        page: 0,
        query: action.payload,
      };
    case "HANDLE_PAGE":
      if (action.payload === "inc") {
        let newPage = state.page + 1;
        if (newPage + 1 > state.nbPages) {
          newPage = 0;
        }

        return { ...state, page: newPage };

      } else if (action.payload === "dec") {
        let newPage = state.page - 1;
        if (newPage < 0) {
          newPage = state.nbPages - 1;
        }

        return { ...state, page: newPage };
      }
    default:
      throw new Error(`No Matches ${action.type} action type`);
  }
};

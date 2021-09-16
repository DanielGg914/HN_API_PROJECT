import React, { useReducer, useEffect, useContext, useState } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = `https://hn.algolia.com/api/v1/search?`;

const initialState = {
  loading: true,
  hits: [],
  nbPages: 0,
  page: 0,
  query: "react",
};

const HeadingContext = React.createContext();

export const HeadingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [search, setSearch] = useState('')

  const fetchHeading = async (url) => {
    dispatch({ type: 'SET_LOADING' });
    console.log(url);
    try {
      const response = await fetch(url);
      // console.log(response.json());
      const data = await response.json();
      dispatch({type: 'SET_HITS', payload: data})
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
      dispatch({type: 'HANDLE_SEARCH', payload: query})
  }

  const handlePage = (value) => {
    dispatch({type: 'HANDLE_PAGE', payload: value})
  }

  useEffect(() => {
    fetchHeading(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);


  return (
    <HeadingContext.Provider value={{ ...state, handleSearch, handlePage }}>
      {children}
    </HeadingContext.Provider>
  );
};

export const useHeadingContext = () => {
  return useContext(HeadingContext);
};

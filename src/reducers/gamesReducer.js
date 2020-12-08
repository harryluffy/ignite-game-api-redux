const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isLoading: true,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        isLoading: false,
      };

    case "LOADING_GAMES":
      return { ...state, isLoading: true };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
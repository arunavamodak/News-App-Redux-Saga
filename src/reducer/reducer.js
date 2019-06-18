const initialState = {
  newsArr: []
};

export function changeNews(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "FETCH_NEWS_SUCCESS":
      return {
        ...state,
        newsArr: action.payload.articles
      };

    default:
      return state;
  }
}

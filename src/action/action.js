export const fetchNews = (a, callback) => {
  return {
    type: "FETCH_NEWS",
    payload: { callback: callback },
    countryCode: a
  };
};

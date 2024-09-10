export const CLIMATE_INITIAL = {
  loading: false,
  city: {},
  cachedCities: [],
};

export const climateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "STOP_LOADING":
      return { ...state, loading: false };
    case "SET_CITY":
      return {
        ...state,
        city: action.payload,
      };
    case "ADD_CITY_CACH":
      return {
        ...state,
        cachedCities: action.payload,
      };
    default:
      return state;
  }
};

export const CLIMATE_INITIAL = {
  loading: false,
  city: {},
  cachedCities: [],
  cityName: "",
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
        city: action.payload.res,
        cachedCities: [...state.cachedCities, action.payload.resName],
        cityName: action.payload.cityName,
      };
    default:
      return state;
  }
};

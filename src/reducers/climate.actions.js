import { API } from "../API/API";

export const setCity = async ({ state, dispatch, coords }) => {
  dispatch({ type: "LOADING" });

  const { lat, lon } = coords;
  try {
    const res = await API({
      url: `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,weather_code,cloud_cover,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,daylight_duration,uv_index_max,precipitation_sum,rain_sum,precipitation_hours,wind_speed_10m_max&timezone=Europe%2FBerlin`,
    });
    dispatch({ type: "SET_CITY", payload: res });
    addCityCach({ state, dispatch, city: res });
  } catch (error) {
    console.error("Error fetching City " + error);
  } finally {
    dispatch({ type: "STOP_LOADING" });
  }
};

const addCityCach = ({ state, dispatch, city }) => {
  const { cachedCities } = state;
  //TODO Habría que añadir si la ciudad esta en la caché ya, eliminarla de su posición y ponerla al final

  if (Object.keys(city).length === 0) {
    return;
  }

  if (cachedCities.length < 5) {
    cachedCities.push(city);
    dispatch({ type: "ADD_CITY_CACH", payload: cachedCities });
  } else {
    cachedCities.shift();
    cachedCities.push(city);
    dispatch({ type: "ADD_CITY_CACH", payload: cachedCities });
  }
};

export const chooseDayInfo = ({ dispatch }) => {};

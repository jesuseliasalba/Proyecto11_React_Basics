import { API } from "../API/API";

export const setCity = async ({ state, dispatch, coords }) => {
  dispatch({ type: "LOADING" });

  const { lat, lon, name } = coords;
  try {
    const res = await API({
      url: `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,snowfall,weather_code,wind_speed_10m,wind_direction_10m&minutely_15=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,snowfall,weather_code,wind_speed_10m,wind_direction_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,rain_sum,wind_speed_10m_max&timezone=Europe%2FBerlin`,
    });
    dispatch({ type: "SET_CITY", payload: res });
    document.title = `YourTime - ${name}`;
  } catch (error) {
    console.error("Error fetching City " + error);
  } finally {
    dispatch({ type: "STOP_LOADING" });
  }
};

export const chooseDayInfo = ({ dispatch }) => {};

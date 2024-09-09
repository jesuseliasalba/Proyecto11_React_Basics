import { API } from "../API/API";

export const setCity = async ({ dispatch, coords }) => {
  dispatch({ type: "LOADING" });

  const { lat, lon } = coords;
  const res = await API({
    url: `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,weather_code,is_day,sunshine_duration&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,precipitation_sum,rain_sum,showers_sum,snowfall_sum`,
  });

  dispatch({ type: "SET_CITY", payload: res });
  dispatch({ type: "STOP_LOADING" });
};

import { createContext, useReducer } from "react";
import { CLIMATE_INITIAL, climateReducer } from "../reducers/climate.reducer";

export const ClimateContext = createContext();

const ClimateProvider = ({children}) => {
    const [state, dispatch] = useReducer(climateReducer, CLIMATE_INITIAL);

    return (
        <ClimateContext.Provider value={{state, dispatch}}>{children}</ClimateContext.Provider>
    )
}

export default ClimateProvider;
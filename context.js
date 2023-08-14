import { useState, createContext } from "react";

export const TabContext = createContext()

const TabContextProvider = ({ children }) => {
    const [tab, setTab] = useState();
    const values = [tab, setTab]
    
    return (
        <TabContext.Provider value={values}>
            {children}
        </TabContext.Provider>
    );
};
  
export default TabContextProvider;
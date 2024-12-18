import { createContext, useState } from "react";

export const globalContext = createContext();

function GlobalConext ({children}) {

	const [ user, setUser] = useState({name:"Ehsan"});
    
	return (
		<globalContext.Provider value={{ user, setUser }}>
			{ children }
		</globalContext.Provider>
	)
}
export default GlobalConext;
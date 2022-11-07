import { createContext } from "react";

const GlobalContext = createContext({
	breakpoint: () => {},
	isLoading: "",
	setIsLoading: () => {},
	axiosInstance: undefined,
});

export default GlobalContext;

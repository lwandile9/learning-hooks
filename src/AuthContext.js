import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [mentorId, setMentorId] = useState(null);

	return (
		<AuthContext.Provider value={{ mentorId, setMentorId }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

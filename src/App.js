import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Importing pages
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Nav from "./components/nav";
import MentorPage from "./components/MentorPage";
import { PageNotFound } from "./pages/404";
import { Footer } from "./components/footer";
import MentorDashboard from "./pages/loggedHomePage";
import { AuthProvider } from "./AuthContext";

function App() {
	return (
		<AuthProvider>
			{" "}
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/components/lwandile" element={<MentorPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/components/" element={<MentorPage />} />
					<Route path="/loggedHomePage" element={<MentorDashboard />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;

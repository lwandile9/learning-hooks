import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
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

// Separate component to handle routes
function AppRoutes() {
    const { mentorId } = useAuth(); // Now this is correctly inside the AuthProvider context

    if (mentorId) {
        console.log("Mentor logged in with ID:", mentorId);
    } else {
        console.log("No mentor logged in");
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={mentorId ? <MentorDashboard /> : <Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/components/lwandile" element={<MentorPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/components/" element={<MentorPage />} />
            <Route path="/dashboard" element={<MentorDashboard />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Nav />
                <AppRoutes /> {/* Moved the routes to a separate component */}
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultNavbar, SimplifiedNavbar } from './comp/Navbar/Navbar';
import Home from './comp/Home/Home';
import SignInForm from './comp/SignInForm/SignInForm';
import LogOut from './comp/Logout/Logout';
import Footer from './comp/Footer/Footer';
import Leaderboard from './comp2/leaderboard/Leaderboard';
import Profile from './comp2/profile/Profile';
import Registration from './comp/Registration/registration';
import Bgvid1 from './V1.mp4';
import "./App.css";
import Admin from './comp/Admin/Admin';

const SignIn = () => (
  <div>
    <SignInForm />
  </div>
);


const SignUp = () => (
  <div>
    <Registration />
  </div>
);

const App = () => {
  const isSimpleNavbar = window.location.pathname === '/';

  return (
    <div className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 video-translate">
        <video className="w-full h-full object-cover translate-x-80 md:translate-x-0" autoPlay loop muted>
          <source src={Bgvid1} type='video/mp4' />
        </video>
        <video className="w-full h-full object-cover -translate-x-10 md:translate-x-0" autoPlay loop muted>
          <source src={Bgvid1} type='video/mp4' />
        </video>
      </div>
      
      <Router>
        <div className="relative">
          {isSimpleNavbar ? <DefaultNavbar /> : <SimplifiedNavbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;

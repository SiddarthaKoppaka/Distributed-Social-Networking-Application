import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Outlet, HashRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import AccountVerified from './components/AccountVerified';
import UserHome from './components/UserHome';
import VerificationFailure from './components/VerificationFailure';
import ResetPasswordPage from './components/ResetPasswordPage';
import ResetPasswordComponent from './components/ResetPasswordComponent';
import UsernameSubmissionComponent from './components/UsernameSubmissionComponent';
import TwoFactorAuth from './components/TwoFactorAuth';
import VerifyTwoFactorAuth from './components/VerifyTwoFactorAuth';
import EditProfile from './components/EditProfile';
import FriendsList from './components/FriendsList';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/profile/userProfile.jsx';
import SearchResultsPage from './components/searchResults/searchResults';
import OAuthRedirectHandler from './components/OAuthRedirectHandler';
import { useDarkMode } from './context/DarkModeContext';

import "./style.scss";
import Navbar from './components/navBar/NavigationBar.jsx';
import LeftBar from './components/leftBar/LeftBar';
import Marketplace from './components/leftBar/marketplace.jsx';
import PaymentPortal from './components/paymentPortal.jsx';
import FBgroups from './components/fbgroups.jsx';
import TikTok from './components/tiktok.jsx';

import RightBar from './components/rightBar/RightBar';

import ChatService from './components/chat/chatService.js';
import ChatList from './components/chat/ChatList.jsx';

import CreatePage from './components/CreatePage.jsx';

import PageComponent from './components/PageComponent.jsx';

import ShowPages from './components/showPages.jsx';

function App() {

  const themes = {
    light: {
      textColor: "#000",
      bg: "white",
      logo: "darkblue",
      bgSoft: "#f6f3f3",
      textColorSoft: "#555",
      border: "ightgray",
    },
    dark: {
      textColor: "whitesmoke",
      bg: "#22303C",
      logo: "white",
      bgSoft: "#333",
      textColorSoft: "lightgray",
      border: "#444",
    }
  };
  
  const { toggle, darkMode } = useDarkMode();
  const theme = darkMode ? themes.dark : themes.light;

  const Layout = () => {
    return (
    
    <div style={{ color: theme.textColor, backgroundColor: theme.bg }}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };


  return (
    <BrowserRouter>
      <div>
        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/oauth-redirect" element={<OAuthRedirectHandler />} />
          
          <Route path="/register" element={<RegisterPage />} />
 
          <Route path="/account_verified" element={
            <ProtectedRoute sequentialAccessRequired={true} redirectTo="/">
              <AccountVerified />
            </ProtectedRoute>
          } />
          <Route path="/verification-failure" element={
            // <ProtectedRoute sequentialAccessRequired={true} redirectTo="/">
            <VerificationFailure />
            // </ProtectedRoute>
          } />
          
          
        {/* LAYOUT ROUTE START */}
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<UserHome />} />

          
          <Route path="/edit-profile" element={
              // <ProtectedRoute requireAuth={true}>
                <EditProfile />
              // </ProtectedRoute>
            } />

          <Route path="/friends" element={<FriendsList />} />
          <Route path="/fbgroups" element={<FBgroups />} />
          <Route path="/tiktok" element={<TikTok />} />
          
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/fbgroups" element={<FBgroups />} />
          <Route path="/tiktok" element={<TikTok />} />

          <Route path="/chat-service/:username" element={<ChatService />} />
          
          <Route path="/all-chats" element={<ChatList />} />

          
          <Route path="/search-results" element={<SearchResultsPage />} />

          <Route path="/create-page" element={<CreatePage />} />
          
          <Route path="/page/:pageId" element={<PageComponent />} />

          <Route path="/getAllPages" element={<ShowPages />} />

          <Route path="/2FA" element={
              // <ProtectedRoute requireAuth={true}>
                <TwoFactorAuth />
              // </ProtectedRoute>
            } />

          <Route path="/user/:username" element={
            // <ProtectedRoute sequentialAccessRequired={true} redirectTo="/">
              <UserProfile />
            // </ProtectedRoute>
          } />
          
          <Route path="/marketplace" element={
            // <ProtectedRoute sequentialAccessRequired={true} redirectTo="/">
              <Marketplace />
            // </ProtectedRoute>
          } />

            <Route path="/payment" component={PaymentPortal} />

          <Route path="/marketplace" element={
            // <ProtectedRoute sequentialAccessRequired={true} redirectTo="/">
              <Marketplace />
            // </ProtectedRoute>
          } />

          <Route path="/payment" component={PaymentPortal} />

          </Route>
          {/* ----- LAYOUT ROUTE END ----- */}


          
          

          <Route path="/UsernameSubmissionComponent" element={
              // <ProtectedRoute requireAuth={true}>
                <UsernameSubmissionComponent />
              // </ProtectedRoute>
            } />

          <Route path="/ResetPasswordComponent" element={
              // <ProtectedRoute requireAuth={true}>
               <ResetPasswordComponent />
              // </ProtectedRoute>
            } />

          <Route path="/ResetPasswordPage" element={
              // <ProtectedRoute requireAuth={true}>
                <ResetPasswordPage />
              // </ProtectedRoute>
            } />
          
          {/* <Route path="/2FA" element={
              // <ProtectedRoute requireAuth={true}>
                <TwoFactorAuth />
              // </ProtectedRoute>
            } /> */}

          <Route path="/verify2FA" element={
              // <ProtectedRoute requireAuth={true}>
                <VerifyTwoFactorAuth />
              // </ProtectedRoute>
            } />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
